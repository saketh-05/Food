import { useState } from "react";
import Input from "./Input";
// import FormExtra from "./formExtra";
import FormAction from "./formAction";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import StyledAlert from "../StyledAlert";

const loginFields = [
  {
    labelText: "Email address",
    labelFor: "email-address",
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
];

function fireConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    startVelocity: 45,
    angle: 60,
    colors: ["#26d0ce", "#a6ffcb", "#f0ff00", "#ff00e0", "#ff0000"],
  });
}
const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Login({ onLogin }) {
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const showText = "🎉 Login Successful! Redirecting... 🤩";
  const [loginState, setLoginState] = useState(fieldsState);
  // const audio = new Audio(luffyOGG);
  const handleChange = (e) => {
    console.log("input changed");
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("Login form submitted");
    e.preventDefault();
    // authenticateUser();
    setAlert(true);
    setTimeout(() => {
      fireConfetti();
      onLogin();
      navigate("/");
      setAlert(false);
    }, 1000);
  };
  const authenticateUser = async () => {
    const backendUrl = import.meta.env.VITE_DEV_BACKEND_URL;
    console.log("backendUrl", backendUrl);
    try {
      console.log(loginState);
      const response = await fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type
        },
        body: JSON.stringify(loginState),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      if (data.message === "Login successful") {
        localStorage.setItem("token", data.token);
        console.log("User authenticated token = ", data.token);
        setAlert(true);
        setTimeout(() => {
          fireConfetti();
          onLogin();
          navigate("/");
          setAlert(false);
        }, 3000);
      } else {
        console.log("User not authenticated");
        alert("Invalid credentials! please try again...");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed! Please try again...");
    }
  };

  return (
    <>
      <form className='mt-8 space-y-6'>
        <div className='-space-y-px'>
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        {/* Not implemented yet */}
        {/* <FormExtra /> */}
        <FormAction handleSubmit={handleSubmit} text={"Login"} />
      </form>
      {alert && <StyledAlert text={showText} />}
    </>
  );
}
