import React from "react";
import "./Hero.css";

const Hero = () => {
  const cards = [
    {
      icon: "bi bi-shield-plus",
      title: "Preventive Dentistry",
      description: "Regular checkups, cleanings, and early cavity detection.",
    },
    {
      icon: "bi bi-brightness-high",
      title: "Cosmetic Enhancements",
      description: "Teeth whitening, veneers, and smile makeovers.",
    },
    {
      icon: "bi bi-hospital",
      title: "Painless Procedures",
      description: "Comfort-focused care using modern anesthetic techniques.",
    },
    {
      icon: "bi bi-emoji-smile",
      title: "Patient Satisfaction",
      description: "Over 95% of patients report positive outcomes and care.",
    },
  ];

  return (
    <section className="hero-section text-white py-5">
      <div className="hero-overlay">
        <div className="container">
          <div className="text-left mb-5">
            <h1 className="hero-title">WELCOME TO Dental HEALTH CARE CENTER</h1>
            <h3 className="hero-subtitle">
              Advanced care for your perfect smile — from trusted professionals.
            </h3>
            <a
              href="#appointmentForm"
              className="btn btn-primary btn-lg mt-4 hero-cta"
            >
              Book Appointment
            </a>
          </div>

          <div className="row">
            {cards.map((card, idx) => (
              <div key={idx} className="col-md-6 col-lg-3 mb-4">
                <div className="card-box bg-light text-dark rounded shadow text-center h-100 position-relative">
                  <div className="icon-circle">
                    <i className={`${card.icon} fs-4 text-primary`}></i>
                  </div>
                  <h5 className="fw-bold mt-4 pt-3">{card.title}</h5>
                  <p className="mt-2">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
