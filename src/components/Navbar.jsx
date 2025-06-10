import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm custom-navbar bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Dental Health Care
        </Link>
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
        <div className="collapse navbar-collapse text-left" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#doctors">
                Doctors
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            {/* Dropdown Button */}
            <li className="nav-item dropdown ms-lg-3">
              <button
                className="btn btn-primary dropdown-toggle"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Options
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#appointmentModal"
                  >
                    Book Appointment
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    data-bs-toggle="modal"
                    data-bs-target="#addDoctorModal"
                  >
                    Add Doctor
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
