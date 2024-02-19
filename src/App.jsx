import { useState } from "react";
import Navbar from "./components/Home page/Navbar";
import Hero from "./components/Home page/Hero";
import Service from "./components/Home page/Service";

import "./App.scss";
import "animate.css";
import Projects from "./components/Home page/Projects";

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Projects/>
    </div>
  );
}

export default App;
