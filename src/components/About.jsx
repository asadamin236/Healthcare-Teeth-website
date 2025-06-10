import React from "react";
import {
  FaTooth,
  FaShieldAlt,
  FaUserMd,
  FaUserNurse,
  FaChair,
  FaSmile,
} from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <>
      <section id="about" className="py-5 containers">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  width: "100%",
                  border: "2px solid #000",
                }}
              >
                <iframe
                  src="https://player.vimeo.com/video/288706316?h=f16be9d751"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Dental Health Care Video"
                ></iframe>
              </div>
            </div>

            <div className="col-md-6">
              <h2
                className="mb-3"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                About Us
              </h2>
              <h6 style={{ fontFamily: "Poppins, sans-serif" }}>
                At <strong>Dental Health Care</strong>, we’re dedicated to
                providing gentle, high-quality dental services for families of
                all ages...
              </h6>

              {[
                {
                  icon: <FaTooth size={32} color="blue" />,
                  title: "Advanced Dental Technology",
                  desc: "We use state-of-the-art tools to ensure pain-free and accurate dental care for all ages.",
                },
                {
                  icon: <FaShieldAlt size={32} color="blue" />,
                  title: "Preventive Dental Care",
                  desc: "Regular checkups, cleanings, and exams to maintain oral health and prevent dental problems.",
                },
                {
                  icon: <FaUserMd size={32} color="blue" />,
                  title: "Skilled & Caring Dentists",
                  desc: "Our expert team provides personalized treatment with a gentle touch and expert knowledge.",
                },
              ].map((item, idx) => (
                <div key={idx} className="d-flex align-items-start mt-4">
                  <div className="me-3">{item.icon}</div>
                  <div>
                    <strong style={{ fontFamily: "Poppins, sans-serif" }}>
                      {item.title}
                    </strong>
                    <h6
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        marginTop: "5px",
                      }}
                    >
                      {item.desc}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="stats" className="py-5 bg-light custom-stats-section">
        <div className="container">
          <h2
            className="text-center mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Why Choose Our Dental Clinic?
          </h2>
          <div className="row gy-4 text-center">
            {[
              {
                icon: <FaUserNurse size={32} color="#007bff" />,
                number: 45,
                label: "Dental Experts",
              },
              {
                icon: <FaChair size={32} color="#007bff" />,
                number: 20,
                label: "Treatment Rooms",
              },
              {
                icon: <FaSmile size={32} color="#007bff" />,
                number: 1200,
                label: "Happy Patients",
              },
            ].map((item, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 position-relative">
                <div className="stats-border-box">
                  <div className="icon-wrapper">{item.icon}</div>
                  <div className="stats-item-content">
                    <h3>{item.number}</h3>
                    <p>{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
