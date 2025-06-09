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
          {/* Column 1 - Company Info */}
          <div className="col-md-3 mb-4">
            <h5
              className="fw-bold"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Dental Health Care
            </h5>
            <p>
              A108 Adam Street
              <br />
              New York, NY 535022
            </p>
            <p>
              <strong>Phone:</strong> +1 5589 55488 55
            </p>
            <p>
              <strong>Email:</strong> info@example.com
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
                <a href="#" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Our Services</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Extra Section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Hic solutastep</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-dark">
                  Molestiae accusamus iure
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Excepturi dignissimos
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Suscipit distinctio
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Dilecta
                </a>
              </li>
              <li>
                <a href="#" className="text-dark">
                  Sit quas consectetur
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="text-center pb-3">
          <p className="mb-1">
            &copy; {new Date().getFullYear()} <strong>Medilab</strong>. All
            Rights Reserved
          </p>
          <p className="mb-0">
            Designed by{" "}
            <a
              href="https://bootstrapmade.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              BootstrapMade
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
