import React from "react";
import "../styles/hero-section.css";

function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container" id="home">
      <h1>Hello! I'm a Full-Stack Developer</h1>
      <p className="text">
        I create reliable and efficient software solutions for any task. I am a
        full-stack developer with experience in Python, Go, JavaScript, and
        modern web technologies. I develop web applications, bots, APIs,
        databases, and more. I have expertise in asynchronous technologies,
        process automation, and CI/CD. I am also know Solidity and Web3 for
        blockchain development.
      </p>
      <div className="buttons">
        <button className="cta-button" onClick={() => scrollToSection("projects")}>
          View Projects
        </button>
        <button className="cta-button secondary" onClick={() => scrollToSection("skills")}>
          View Skills
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
