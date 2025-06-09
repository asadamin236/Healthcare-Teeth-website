import { useState } from "react";
import { FaTooth, FaSmile, FaMedkit, FaXRay, FaTeeth } from "react-icons/fa";
import "./Services.css";

const services = [
  {
    id: 1,
    icon: <FaTooth />,
    title: "General Dentistry",
    description: "Routine checkups, cleanings, and oral exams.",
  },
  {
    id: 2,
    icon: <FaSmile />,
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers, and smile makeovers.",
  },
  {
    id: 3,
    icon: <FaMedkit />,
    title: "Emergency Care",
    description: "Immediate treatment for dental emergencies.",
  },
  {
    id: 4,
    icon: <FaXRay />,
    title: "Dental X-Rays",
    description: "Accurate imaging for proper diagnosis and treatment.",
  },
  {
    id: 5,
    icon: <FaTeeth />,
    title: "Orthodontics",
    description: "Braces and aligners for teeth straightening.",
  },
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="services-container-wrapper">
      <h2 className="text-center mb-4">Our Dental Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-card ${
              hoveredId === service.id ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
