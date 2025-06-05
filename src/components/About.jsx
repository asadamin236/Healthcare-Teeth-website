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
              <iframe
                width="100%"
                height="400px"
                style={{ border: "2px solid black" }}
                src="https://www.youtube.com/embed/Y7f98aduVJ8"
                title="BootstrapMade Template Builder Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Right Column - About Content */}
            <div className="col-md-6">
              <h2 style={{ fontFamily: "Poppins, sans-serif" }}>About Us</h2>
              <h6 style={{ fontFamily: "Poppins, sans-serif" }}>
                Dolor iure expedita id fuga asperiores qui sunt consequatur
                minima. Quidem voluptas deleniti. Sit quia molestiae quia quas
                qui magnam itaque veritatis dolores. Corrupti totam ut eius
                incidunt reiciendis veritatis asperiores placeat.
              </h6>

              {/* Icon Blocks */}
              {[
                {
                  icon: "fa-vial-circle-check",
                  title: "Ullamco laboris nisi ut aliquip consequat",
                  desc: "Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade",
                },
                {
                  icon: "fa-pump-medical",
                  title: "Magnam soluta odio exercitationem reprehenderi",
                  desc: "Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna pasata redi",
                },
                {
                  icon: "fa-heart-circle-xmark",
                  title: "Voluptatem et qui exercitationem",
                  desc: "Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt maxime veniam",
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
          <div className="row gy-4 text-center">
            {[
              { icon: "fa-user-doctor", number: 85, label: "Doctors" },
              { icon: "fa-hospital", number: 18, label: "Departments" },
              { icon: "fa-flask", number: 12, label: "Research Labs" },
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
      </section>
    </>
  );
};

export default About;
