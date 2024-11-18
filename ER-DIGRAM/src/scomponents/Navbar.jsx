import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS bundle
import { Link } from "react-scroll"; // Import the Link component from react-scroll
import "./CSS/style.css";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  // Functionality to close the navbar menu after a link is clicked
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
              className="img-fluid" // Bootstrap class for responsive images
              
            />
          </a>
        {/* Toggler Button for Mobile View */}
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
          <ul className="navbar-nav mx-auto text-center text-lg-start"> {/* Add text-center */}
            <li className="nav-item">
              <Link
                style={{ cursor: "pointer" }}
                className="nav-link"
                to="features"
                smooth={true}
                duration={250}
                onClick={closeNavbar} // Close menu after click
              >
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ cursor: "pointer" }}
                className="nav-link"
                to="pricing"
                smooth={true}
                duration={250}
                onClick={closeNavbar} // Close menu after click
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/templates"
                onClick={closeNavbar} // Close menu after click
              >
                Templates
              </a>
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
                    closeNavbar(); // Close menu after logout
                  }}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/login"
                    onClick={closeNavbar} // Close menu after click
                  >
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/signup"
                    onClick={closeNavbar} // Close menu after click
                  >
                    Signup
                  </a>
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
