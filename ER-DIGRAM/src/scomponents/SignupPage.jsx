import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();  // useNavigate is the correct hook for navigation

  const handleSubmit = (e) => {
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

    // Clear any previous errors
    setError("");

    // Simulate registration and store user data in localStorage
    const user = { email };
    localStorage.setItem("user", JSON.stringify(user));
    onSignup(user); // Automatically log in the user after signup

    // Redirect to the home page after signup
    navigate("/"); // Use 'navigate' to redirect instead of history.push
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
        
        <button type="submit">Sign Up</button>
        
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
