import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/style.css";

const SignupPage = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      // Firebase REST API signup URL
      const apiKey = "AIzaSyCHQaK4Ab-hHH4YcN82ocpxSl1V5evK3l0";
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

      // POST request to Firebase API
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
        // Store user data and clear any previous errors
        setError("");
        onSignup(data);  // Trigger onSignup callback with user data
        localStorage.setItem("user", JSON.stringify(data));
        
        // Redirect to the home page after signup
        navigate("/");
      } else {
        // Display error from Firebase API response
        setError(data.error.message || "Signup failed");
      }
    } catch (error) {
      setError("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        
        {error && <p className="error-message">{error}</p>}  {/* Display error message if any */}

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        
        <button type="submit" className="button1">Sign Up</button>
        
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
