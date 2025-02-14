import React, { useEffect } from "react";
import "../styles/header.css";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelector("header").style.opacity = "0.6";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <span>
        <a href="/">MARK-T</a>
      </span>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
