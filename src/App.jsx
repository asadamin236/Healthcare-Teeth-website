import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AppointmentModal from "./components/AppointmentModal"; // ✅ still imported

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* ✅ AppointmentModal loaded globally, not via route */}
      <AppointmentModal />
    </>
  );
}

export default App;
