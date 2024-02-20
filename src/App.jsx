import { useState } from "react";
import Navbar from "./components/Home page/Navbar";
import Hero from "./components/Home page/Hero";
import Service from "./components/Home page/Service";
import Projects from "./components/Home page/Projects";
import Testimonials from "./components/Home page/Testimonials";
import "./App.scss";
import "animate.css";


function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Projects/>
      <Testimonials />
    </div>
  );
}

export default App;
