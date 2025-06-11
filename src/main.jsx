import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

// 🆕 AOS Import
import AOS from "aos";
import "aos/dist/aos.css";

// 🆕 Initialize AOS before rendering
AOS.init({
  duration: 800, // animation duration in ms
  once: true, // whether animation happens only once
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
