// src/components/Hero.jsx
import React from "react";
import "./Hero.css"; // Make sure this contains the styles for icon-circle and card-box

const Hero = () => {
  const cards = [
    {
      icon: "bi bi-person-check",
      title: "Expert Doctors",
      description: "Our team consists of top specialists from various fields.",
    },
    {
      icon: "bi bi-clipboard-data",
      title: "Modern Equipment",
      description: "We use the latest medical technologies and tools.",
    },
    {
      icon: "bi bi-headset",
      title: "24/7 Support",
      description: "We are available round the clock for emergencies.",
    },
    {
      icon: "bi bi-wallet2",
      title: "Affordable Care",
      description: "Providing quality care at affordable prices.",
    },
  ];

  return (
    <section
      className="hero-section text-white py-5"
      style={{
        backgroundImage:
          "url('https://bootstrapmade.com/content/demo/Medilab/assets/img/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="text-left mb-5">
          <h1 className="display-4 fw-bold text-black">WELCOME TO MEDILAB</h1>
          <h3 className="lead mt-3 text-black">
            We are team of talented designers making websites with Bootstrap
          </h3>
        </div>

        <div className="row">
          {cards.map((card, idx) => (
            <div key={idx} className="col-md-6 col-lg-3 mb-4">
              <div className="card-box bg-light text-dark rounded shadow text-center h-100 position-relative">
                {/* Floating icon circle */}
                <div className="icon-circle">
                  <i className={`${card.icon} fs-4 text-primary`}></i>
                </div>

                {/* Content below the icon */}
                <h5 className="fw-bold mt-4 pt-3">{card.title}</h5>
                <p className="mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
