
import React, { useEffect, useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom"; // No need for BrowserRouter here
import Navbar from "./scomponents/Navbar";
import HomePage from "./scomponents/HomePage";
import LoginPage from "./scomponents/LoginPage";
import SignupPage from "./scomponents/SignupPage";

import Editercomp from "./vcomponents/Editercomp"
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
  };

  const handleSignup = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <SignupPage onSignup={handleSignup} />} />
        <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
        
        
        <Route path="/editercomp" element={<Editercomp />} />

      </Routes>
    </>
  );
}

export default App;
