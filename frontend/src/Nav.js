import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-stylo navbar-expand-lg navbar-dark shadow w-100 m-0">
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
              <a
                className="px-3 btn btn-secondary nav-link active menu-button py-1"
                href="#"
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="px-3 btn btn-secondary nav-link menu-button py-1"
                href="#marche-section"
              >
                Comment ça marche?
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 btn btn-secondary nav-link menu-button py-1"
                href="#about-section"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
