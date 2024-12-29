import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link as ScrollLink } from "react-scroll"; // Import from react-scroll
import { Link } from "react-router-dom"; // Import from react-router-dom
import "./CSS/style.css";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="https://res.cloudinary.com/da4bxmlgp/image/upload/v1731911482/DRAW_ER_1_kidsos.png"
            alt="Logo"
            className="img-fluid"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Center-aligned Links */}
          <ul className="navbar-nav mx-auto text-center text-lg-start">
            <li className="nav-item">
              <ScrollLink
                style={{ cursor: "pointer" }}
                className="nav-link"
                to="features"
                smooth={true}
                duration={250}
                onClick={closeNavbar}
              >
                Features
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                style={{ cursor: "pointer" }}
                className="nav-link"
                to="pricing"
                smooth={true}
                duration={250}
                onClick={closeNavbar}
              >
                Pricing
              </ScrollLink>
            </li>
          </ul>

          {/* Right-aligned Links */}
          <ul className="navbar-nav">
            {isLoggedIn ? (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => {
                    handleLogout();
                    closeNavbar();
                  }}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/login"
                    onClick={closeNavbar}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/signup"
                    onClick={closeNavbar}
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
