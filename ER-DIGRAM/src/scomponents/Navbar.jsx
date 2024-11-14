import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-scroll';  // Import the Link component from react-scroll
import "./CSS/style.css"

const Navbar = ({ isLoggedIn, handleLogout }) => (
  <div className="navbar-container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">DrawER</a>
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link style={{ cursor: "pointer" }}  className="nav-link" to="features" smooth={true} duration={250}>Features</Link>  {/* Use Link for smooth scroll */}
          </li>
          <li className="nav-item">
            <Link style={{ cursor: "pointer" }}  className="nav-link" to="pricing" smooth={true} duration={250}>Pricing</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/templates">Templates</a>
          </li>
          {isLoggedIn ? (
            <li className="nav-item nav-link btn btn-link d-flex align-items-center"
                onClick={handleLogout}>
                Logout
            </li>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/signup">Signup</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
