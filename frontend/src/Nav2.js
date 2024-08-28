import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Nav2() {
  return (
    <nav className="navbar navbar-stylo-2 position-fixed navbar-expand-lg navbar-dark shadow w-100 py-3 m-0">
      <div className="container justify-content-between">
        <a className="navbar-brand p-0 mx-4" href="#home-section">
          <span className="fs-3 font-more-sugar">Sco</span>
          <span className="fs-4 font-finger-paint">livre</span>
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
                offset={-60}
              >
                Accueil
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="px-3 btn btn-secondary nav-link menu-button py-1"
                activeClass="active"
                to="marche-section"
                spy={true}
                offset={-60}
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
                offset={-60}
              >
                À propos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav2;
