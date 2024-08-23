import React from "react";
import { Link } from "react-scroll";

function Nav2() {
  return (
    <nav className="navbar navbar-stylo-2 position-fixed navbar-expand-lg navbar-dark shadow w-100 py-3 m-0">
      <div className="container justify-content-between">
        <a className="navbar-brand p-0 mx-4" href="#">
          Navbar
        </a>

        <button
          className="navbar-toggler py-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars fa-lg"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav navbar-nav-main align-items-center">
            <li className="nav-item">
              <Link
                className="px-3 btn btn-secondary nav-link menu-button py-1"
                activeClass="active"
                to="home-section"
                spy={true}
                onClick={() => {
                  // Manually collapse the navbar by toggling the class
                  const navbarCollapse = document.getElementById("navbarNav");
                  if (navbarCollapse) {
                    navbarCollapse.classList.remove("show");
                  }
                }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="px-3 btn btn-secondary nav-link menu-button py-1"
                activeClass="active"
                to="marche-section"
                spy={true}
                onClick={() => {
                  // Manually collapse the navbar by toggling the class
                  const navbarCollapse = document.getElementById("navbarNav");
                  if (navbarCollapse) {
                    navbarCollapse.classList.remove("show");
                  }
                }}
              >
                Comment ça marche?
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="px-3 btn btn-secondary nav-link menu-button py-1"
                activeClass="active"
                to="about-section"
                spy={true}
                onClick={() => {
                  // Manually collapse the navbar by toggling the class
                  const navbarCollapse = document.getElementById("navbarNav");
                  if (navbarCollapse) {
                    navbarCollapse.classList.remove("show");
                  }
                }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav2;
