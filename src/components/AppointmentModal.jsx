import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const AppointmentModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = import.meta.env.VITE_SHEETBEST_URL;
    const apiKey = import.meta.env.VITE_SHEETBEST_API_KEY;  
    // Uncomment below line if your sheet is private
    // const apiKey = import.meta.env.VITE_SHEETBEST_API_KEY;

    console.log("Sending data to:", scriptURL);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Only include the Authorization header if your sheet is private
          // Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Appointment booked successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          department: "",
          date: "",
        });
      } else {
        alert(
          "Failed to book appointment. Please check your Sheetbest settings."
        );
      }
    } catch (error) {
      console.error("Error while submitting appointment:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="modal fade"
      id="appointmentModal"
      tabIndex="-1"
      aria-labelledby="appointmentModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title" id="appointmentModalLabel">
                Book Appointment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="03XX-XXXXXXX"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email (optional)</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter if available"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Teeth Department</label>
                <select
                  className="form-select"
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleChange}
                >
                  <option value="">Choose a department</option>
                  <option>Dentistry - General Checkup</option>
                  <option>Orthodontics - Braces</option>
                  <option>Periodontics - Gum Care</option>
                  <option>Endodontics - Root Canal</option>
                  <option>Pediatric Dentistry</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Preferred Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-success">
                Confirm Booking
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
