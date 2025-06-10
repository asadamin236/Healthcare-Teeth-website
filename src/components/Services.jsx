import { useState } from "react";
import {
  FaTooth,
  FaSmile,
  FaMedkit,
  FaXRay,
  FaTeeth,
  FaProcedures,
  FaRegGrinStars,
  FaUserShield,
} from "react-icons/fa";
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
  {
    id: 6,
    icon: <FaProcedures />,
    title: "Oral Surgery",
    description: "Extractions, implants, and other minor surgical procedures.",
  },
  {
    id: 7,
    icon: <FaRegGrinStars />,
    title: "Pediatric Dentistry",
    description: "Gentle dental care tailored for children and teens.",
  },
  {
    id: 8,
    icon: <FaUserShield />,
    title: "Gum Disease Treatment",
    description: "Treatment for gingivitis and periodontal disease.",
  },
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div id="services" className="services-container-wrapper text-center">
      <h2 className="mb-5 services-heading">Our Dental Services</h2>

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
