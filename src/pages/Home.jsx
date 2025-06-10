// Home.jsx
import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import Footer from "../components/Footer";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="doctors">
        <Doctors />
      </section>
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
