import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand" to="/">
            <img src="https://tedstreams.com/wp-content/uploads/2023/06/cropped-Group-17-1.png" />
          </Link>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Nav */}
            <ul className="mx-auto navbar-nav">
              <li className="nav-item dropdown">
                {/* Toggle */}
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <Link className="nav-link" to="/">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <Link className="nav-link" to="/lubricants">
                  Petroleum Products
                </Link>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <Link className="nav-link" to="/medical">
                  Medical Supplies
                </Link>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <Link className="nav-link" to="/safety">
                  Safety Equipments
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav flex-row">
              <li className="nav-item ms-lg-n4">
                <a className="nav-link" href="./account-orders.html">
                  <i className="fa fa-phone" /> +2784965686978
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
