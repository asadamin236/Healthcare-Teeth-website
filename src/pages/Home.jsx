import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Footer />
    </>
  );
}

export default Home;
