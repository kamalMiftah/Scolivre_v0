import React from 'react';

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark shadow w-100 m-0">
        <div className="container justify-content-between">
        <a class="navbar-brand p-0 mx-4" href="#">Navbar</a>

          <button
            className="navbar-toggler w-50 py-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">

            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a className="btn btn-secondary nav-link active menu-button py-1" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-secondary nav-link menu-button py-1" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-secondary nav-link menu-button py-1" href="#">
                  Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
