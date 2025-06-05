import React from "react";

const doctorsData = [
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
      "https://imgs.search.brave.com/ofjLiW56XIQG7Gq5UN3yVQq6dpd95RJwFcPZYkcDQWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQz/NDY4NzQxMC9waG90/by9wb3J0cmFpdC1v/Zi1oYXBweS1hbmQt/c3VjY2Vzc2Z1bC1h/ZnJpY2FuLWFtZXJp/Y2FuLWRvY3Rvci1t/YW4td29ya2luZy1p/bnNpZGUtb2ZmaWNl/LWNsaW5pYy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9a0t2/VW16a290TjNGcldU/R2dTM2FyMm1tNFNM/d2xWM2NiaU5DLUJw/MTJZST0",
  },
  {
    id: 3,
    name: "Dr. Nadia Shah",
    specialty: "Periodontist",
    description:
      "Expert in gum disease treatment and oral inflammation management.",
    image:
      "https://imgs.search.brave.com/q2tn1O2jCcrHXbwzTaSlqOZ8KSa2TdkEcdiBSk08mNQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/NzUyMjI3MC9waG90/by9zaG90LW9mLWEt/YmVhdXRpZnVsLXlv/dW5nLWRvY3Rvci1p/bi1oZXItb2ZmaWNl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1BMjgteWUwdHlr/N0hTSW83T3ZqcUtP/MmRBX19BU3dQUXJm/QzZpWTZwLTNZPQ",
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-3">Our Doctors</h2>
        <p className="text-center mb-4">
          Meet our expert team of dental specialists.
        </p>
        <div className="row">
          {doctorsData.map((doc) => (
            <div
              key={doc.id}
              className="col-md-4 mb-4"
              style={{ cursur: "pointer" }}
            >
              <div className="card h-100">
                <div className="row g-0 align-items-center">
                  <div className="col-4">
                    <img
                      src={doc.image}
                      className="img-fluid rounded-start"
                      alt={doc.name}
                      style={{
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">{doc.name}</h5>
                      <p className="card-text">
                        <strong>{doc.specialty}</strong>
                      </p>
                      <p className="card-text">{doc.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
