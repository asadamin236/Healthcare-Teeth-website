import React from "react";

const Services = () => {
  const services = [
    {
      title: "Cardiology",
      icon: "🫀",
      desc: "Expert heart care and diagnostics.",
    },
    {
      title: "Neurology",
      icon: "🧠",
      desc: "Brain and nervous system treatment.",
    },
    {
      title: "Pediatrics",
      icon: "🧒",
      desc: "Children's health and wellness.",
    },
    { title: "Orthopedics", icon: "🦴", desc: "Bone and joint care." },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {services.map((service, idx) => (
            <div key={idx} className="col-md-6 col-lg-3 mb-4">
              <div className="card text-center h-100 shadow-sm">
                <div className="card-body">
                  <div className="display-4">{service.icon}</div>
                  <h5 className="card-title mt-3">{service.title}</h5>
                  <p className="card-text">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
