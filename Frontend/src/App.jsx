import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Help from "./pages/Help";
import NotFoundPage from "./pages/404page";
import { initializeApp } from "./auth";
import BackgroundAudio from "./components/BackgroundAudio";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const toggleLogin = () => {
    console.log("Toggling login");
    setIsLogin(true);
  };
  const toggleLogout = () => {
    console.log("Toggling logout");
    setIsLogin(false);
    localStorage.removeItem("token");
    if(localStorage.getItem("userData")){
      localStorage.removeItem("userData");
    }
  };
  useEffect(() => {
    const checkToken = async () => {
      const res = await initializeApp();
      console.log(res);
      if (res.message === "Protected") {
        setIsLogin(true);
      } else {
        setIsLogin(false);
        console.log(res.message);
      } // Call this function on app load
    };
    checkToken();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <>
            <Route path='/' element={<Home onLogout={toggleLogout} />} />
            <Route path='/recipe/:id' element={<Recipe />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/about' element={<About />} />
            <Route path='/help' element={<Help/>} />
            <Route path='*' element={<NotFoundPage />} />
          </>
        ) : (
          <>
            <Route
              path='/login'
              element={<LoginPage onLogin={toggleLogin} />}
            />
            <Route path='/signup' element={<SignupPage />} />
          </>
        )}
        {!isLogin && <Route path='*' element={<Navigate to='/login' />} />}
      </Routes>
      <BackgroundAudio />
    </BrowserRouter>
  );
}
export default App;
