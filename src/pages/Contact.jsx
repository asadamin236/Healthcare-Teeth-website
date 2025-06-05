import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="container py-5 containers">
        <h2 className="text-center mb-4">Contact Us</h2>

        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <FaMapMarkerAlt /> <strong> Address:</strong>
              <p>123 Main Street, YourCity, Country</p>
            </div>
            <div className="mb-3">
              <FaPhone /> <strong> Phone:</strong>
              <p>+92 300 0000000</p>
            </div>
            <div className="mb-3">
              <FaEnvelope /> <strong> Email:</strong>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
