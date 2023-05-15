import React from "react";
import "./Header.css";
import Edyoda from "../../assets/EDYODA.png";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="navbar-wrap d-flex justify-content-between">
            <div className="nav-left d-flex align-items-center">
              <a className="navbar-brand" href="#">
                <img src={Edyoda} alt="Edyoda_logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link">
                      <span>Courses</span>
                      <i class="fa-solid fa-angle-down"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <span>Programs</span>
                      <i class="fa-solid fa-angle-down"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-right d-flex align-items-center">
                <div className="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <a href="#" className="login-link">Log in</a>
                <a href="#" className="btn btn-join">join now</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
