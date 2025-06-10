import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5">
      <div className="container">
        <div className="row">
          {/* Column 1 - Clinic Info */}
          <div className="col-md-3 mb-4">
            <h5
              className="fw-bold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Dental Health Care
            </h5>
            <p>
              A108 Smile Avenue
              <br />
              New York, NY 535022
            </p>
            <p>
              <strong>Phone:</strong> +1 800 123 4567
            </p>
            <p>
              <strong>Email:</strong> care@dentalhealth.com
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="text-dark">
                <FaTwitter />
              </a>
              <a href="#" className="text-dark">
                <FaFacebookF />
              </a>
              <a href="#" className="text-dark">
                <FaInstagram />
              </a>
              <a href="#" className="text-dark">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 2 - Useful Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-dark">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-dark">
                  Services
                </a>
              </li>
              <li>
                <a href="#doctors" className="text-dark">
                  Our Dentists
                </a>
              </li>
              <li>
                <a href="#contact" className="text-dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Dental Services</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#services" className="text-dark">
                  General Dentistry
                </a>
              </li>
              <li>
                <a href="#services" className="text-dark">
                  Cosmetic Dentistry
                </a>
              </li>
              <li>
                <a href="#services" className="text-dark">
                  Orthodontics
                </a>
              </li>
              <li>
                <a href="#services" className="text-dark">
                  Emergency Dental Care
                </a>
              </li>
              <li>
                <a href="#services" className="text-dark">
                  Dental X-Rays
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Patient Resources */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Patient Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Insurance Info
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Dental Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Patient Forms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div
          className="text-center pb-3"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px" }}
        >
          <p className="mb-1" style={{ marginBottom: "5px" }}>
            &copy; {new Date().getFullYear()}{" "}
            <strong style={{ fontFamily: "Poppins, sans-serif" }}>
              Dental Health Care
            </strong>
            . All Rights Reserved
          </p>
          <p className="mb-0">
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/asadamin/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#0077b5", // LinkedIn blue
                fontWeight: "500",
                textDecoration: "none",
              }}
            >
              Asad Amin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
