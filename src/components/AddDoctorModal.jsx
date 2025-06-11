import React, { useState } from "react";
import "./AddDoctorModal.css";

const AddDoctorModal = ({ addDoctor }) => {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoctor({ ...formData, id: Date.now() });
    setFormData({ name: "", specialty: "", description: "", image: "" });
    document.getElementById("closeAddDoctorModal").click(); // Close modal
  };

  return (
    <div
      className="modal fade"
      id="addDoctorModal"
      tabIndex="-1"
      aria-labelledby="addDoctorModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addDoctorModalLabel">
              Add New Doctor
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="closeAddDoctorModal"
            ></button>
          </div>
          <div className="modal-body row g-3">
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Doctor's Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="specialty"
                className="form-control"
                placeholder="Specialty"
                value={formData.specialty}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12">
              <textarea
                name="description"
                className="form-control"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-12">
              <input
                type="url"
                name="image"
                className="form-control"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary">
              Add Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctorModal;
