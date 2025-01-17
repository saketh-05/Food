import { useState , useEffect} from "react";
import FormAction from "./formAction";
import Input from "./Input";
import StyledAlert from "../StyledAlert";
import {useNavigate} from 'react-router-dom';
const signupFields = [
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "Username",
  },
  {
    labelText: "Email address",
    labelFor: "email",
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
  {
    labelText: "Confirm Password",
    labelFor: "confirm-password",
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "Confirm Password",
  },
];

const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

export default function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const showText = "🎉 Registration Successful! Redirecting...";
  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = async () => {
    const backendUrl = import.meta.env.VITE_DEV_BACKEND_URL;
    console.log(signupState);
    await fetch(`${backendUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupState),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "New Foodie Registered successfully") {
          setAlert(true);
          setTimeout(() => {
            navigate('/login');
            setAlert(false);
          }, 3000);
        } else {
          alert("Account creation failed - " + data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
      <div className='-space-y-px'>
        {fields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text='Signup' />
      </div>
    </form>
    {alert && <StyledAlert text={showText}/>}
    </>
  );
}
