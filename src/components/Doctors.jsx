import React, { useState, useEffect } from "react";
import AddDoctorModal from "./AddDoctorModal";
import "./Doctors.css";

const defaultDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Khan",
    specialty: "Senior Dental Surgeon",
    description:
      "Expert in cosmetic dentistry with over 12 years of clinical experience.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Dr. Ahmed Ali",
    specialty: "Pediatric Dentist",
    description:
      "Provides gentle dental care for children using the latest pain-free techniques.",
    image:
      "https://th.bing.com/th/id/R.9ef38bbdcb39be4ad8569caf8ea21fec?rik=OaIiNv0Rcmn8pA&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    name: "Dr. Nadia Shah",
    specialty: "Periodontist",
    description:
      "Expert in gum disease treatment and oral inflammation management.",
    image:
      "https://th.bing.com/th/id/OIP.nU1sCXJ3v_5M488dWowkNQHaE7?r=0&rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    name: "Dr. Haris Qureshi",
    specialty: "Orthodontist",
    description:
      "Specialist in braces, aligners, and jaw alignment treatments.",
    image:
      "https://img.lovepik.com/free-png/20220414/lovepik-dental-clinic-male-doctor-png-image_402146916_wh300.png",
  },
  {
    id: 5,
    name: "Dr. Anaya Rehman",
    specialty: "Endodontist",
    description:
      "Focused on root canal therapies and preserving natural teeth.",
    image:
      "https://th.bing.com/th/id/R.e7ec296656c809afebd5099a4f52ee0d?rik=%2beW7BrQsRSzucQ&pid=ImgRaw&r=0",
  },
];

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Uncomment this line for a one-time reset
    // localStorage.removeItem("doctors");

    try {
      const stored = localStorage.getItem("doctors");
      const parsed = stored ? JSON.parse(stored) : null;

      if (Array.isArray(parsed) && parsed.length > 0) {
        setDoctors(parsed);
      } else {
        setDoctors(defaultDoctors);
      }
    } catch (error) {
      console.error("Invalid doctors data in localStorage. Resetting.", error);
      setDoctors(defaultDoctors);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("doctors", JSON.stringify(doctors));
  }, [doctors]);

  const addDoctor = (newDoctor) => {
    const newEntry = {
      ...newDoctor,
      id: doctors.length + 1,
    };
    setDoctors([...doctors, newEntry]);
  };

  return (
    <section id="doctors" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-3">Meet Our Dental Experts</h2>
        <p className="text-center mb-5 text-muted">
          Highly qualified and compassionate dental professionals.
        </p>

        <div className="row g-4">
          {doctors.map((doc) => (
            <div key={doc.id} className="col-md-6 col-lg-4">
              <div className="doctor-card h-100 shadow-sm rounded p-3 text-center bg-white">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="doctor-img mb-3"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    margin: "0 auto",
                    display: "block",
                  }}
                />
                <h5 className="fw-bold">{doc.name}</h5>
                <p className="text-primary mb-1">{doc.specialty}</p>
                <p className="text-muted small">{doc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddDoctorModal addDoctor={addDoctor} />
    </section>
  );
};

export default Doctors;
