import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section id="about" className="py-5 containers">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column - Video */}
            <div
              className="col-md-6 mb-4 mb-md-0"
              style={{ marginTop: "10px" }}
            >
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  maxWidth: "100%",
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

            {/* Right Column - About Content */}
            <div className="col-md-6">
              <h2 style={{ fontFamily: "Poppins, sans-serif" }}>About Us</h2>
              <h6 style={{ fontFamily: "Poppins, sans-serif" }}>
                At <strong>Dental Health Care</strong>, we’re dedicated to
                providing gentle, high-quality dental services for families of
                all ages. From routine cleanings to advanced cosmetic
                procedures, our expert team uses modern equipment and a
                compassionate approach to ensure your smile stays bright and
                healthy. We believe that great dental care begins with trust,
                comfort, and education.
              </h6>

              {/* Dental Icon Blocks */}
              {[
                {
                  icon: "fa-tooth", // FontAwesome icon
                  title: "Advanced Dental Technology",
                  desc: "We use state-of-the-art tools to ensure pain-free and accurate dental care for all ages.",
                },
                {
                  icon: "fa-teeth-open",
                  title: "Preventive Dental Care",
                  desc: "Regular checkups, cleanings, and exams to maintain oral health and prevent dental problems.",
                },
                {
                  icon: "fa-user-doctor",
                  title: "Skilled & Caring Dentists",
                  desc: "Our expert team provides personalized treatment with a gentle touch and expert knowledge.",
                },
              ].map((item, idx) => (
                <div key={idx} style={{ marginTop: "40px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                    }}
                  >
                    <i
                      className={`fa-solid ${item.icon}`}
                      style={{ fontSize: "3rem", color: "blue" }}
                    />
                    <b style={{ fontFamily: "Poppins, sans-serif" }}>
                      {item.title}
                    </b>
                  </div>
                  <h6
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      marginTop: "10px",
                      marginLeft: "60px",
                    }}
                  >
                    {item.desc}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-5 bg-light custom-stats-section">
        <div className="container">
          <div className="container py-5">
            <h2
              className="text-center mb-4"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Why Choose Our Dental Clinic?
            </h2>
            <div className="row gy-4 text-center">
              {[
                { icon: "fa-tooth", number: 45, label: "Dental Experts" },
                { icon: "fa-chair", number: 20, label: "Treatment Rooms" },
                {
                  icon: "fa-face-smile",
                  number: 1200,
                  label: "Happy Patients",
                },
              ].map((item, idx) => (
                <div key={idx} className="col-lg-4 col-md-6 position-relative">
                  <div className="stats-border-box">
                    <div className="icon-wrapper">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <div className="stats-item-content">
                      <h3 className="purecounter">{item.number}</h3>
                      <p>{item.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
