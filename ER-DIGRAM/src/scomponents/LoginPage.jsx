import React, { useState } from "react";
import "./CSS/style.css";
import { Link } from "react-router-dom";
const LoginPage = ({ onLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Firebase REST API login URL
      const apiKey = "AIzaSyCHQaK4Ab-hHH4YcN82ocpxSl1V5evK3l0";
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

      // Send POST request to Firebase for authentication
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, store user data and clear previous errors
        setError("");
        onLogin(data);  // Pass user data to the parent component
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        // Show error message from Firebase response
        setError(data.error.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="login-form">
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn button1">Login</button>
          </form>
          <div className="signup-link">
            <Link
              className="nav-link"
              to="/signup"
            >Don't have an account?
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default LoginPage;
