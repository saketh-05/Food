import Headerls from "../components/Login-Signup/Headerls";
import Login from "../components/Login-Signup/Login";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import GoogleLogin from "../components/GoogleLogin";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { useState } from "react";
import StyledAlert from "../components/StyledAlert";
import {jwtDecode} from "jwt-decode";

export default function LoginPage({ onLogin }) {
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const showText = "🎉 Login Successful! Redirecting... 🤩";

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: 20 },
  };

  const pageTransition = {
    duration: 1,
  };
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
  const handleLoginSuccess = (response) => {
    console.log('Login Success:', response);
    const userData = jwtDecode(response.credential);
    localStorage.setItem("token", response.clientId);
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log('User Data:', userData);
    setAlert(true);
        setTimeout(() => {
          fireConfetti();
          onLogin(userData);
          navigate("/");
          setAlert(false);
        }, 3000);
  };

  const handleLoginError = () => {
    console.error('Login Failed');
    alert('Login failed. Please try again.');
  };
  return (
    <HelmetProvider>
      <motion.div
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}
      >
        <Helmet>
          <title>FoodTube Login</title>
        </Helmet>
        <div className='min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-md w-full space-y-8'>
            <Headerls
              heading='Welcome Back Foodie!'
              paragraph='New here? Become a Foodie by'
              linkName='Sign Up'
              linkUrl='/signup'
            />
            <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError}/>
            <Login onLogin={onLogin} />
          </div>
        </div>
        {alert && <StyledAlert text={showText} />}
      </motion.div>
    </HelmetProvider>
  );
}
