import About from "./component/about";
import Contact from "./component/contact";
import Hero from "./component/hero";
import Project from "./component/project";
import Skill from "./component/skill";
import React from "react";
export default function Home() {
  return (
    <div className=" bg-[#101820]" >
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />

    </div>


  )
}