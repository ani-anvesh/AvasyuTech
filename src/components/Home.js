import React from "react";
import "./Home.css";
import Package from "./layout/Package";
import HomePage from "./HomePage";
import Partners from "./shiva/patners/Patners";
import Why from "./vineeth/Why";
import Assess from "./vineeth/components/asses/Assess";
import Index from "./vineeth/footer/index";
import Mentors from "./layout/Mentors";
import About from "./shiva/about/About";
import Slider from "./layout/Slider";
import Events from "./layout/event";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <HomePage />
      <Slider />
      <Events />
      <Why />
      <About />
      <Package />
      <Mentors />
      <Assess />
      <Partners />
      <Index />
    </div>
  );
}
