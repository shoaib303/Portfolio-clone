import React from "react";
import "./App.css";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Experience from "./components/Experience/Experience.js";
import Education from "./components/Education/Education.js";
import Project from "./components/Project/Project.js";
import Skill from "./components/Skill/Skill.js";
import Get from "./components/Get/Get.js";
import "./components/portfoli.css";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Experience />
      <Education />
      <Project />
      <Skill />
      <Get />
    </div>
  );
};

export default App;
