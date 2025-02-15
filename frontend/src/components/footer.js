import React from "react";
import "../styles/footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <p className="footer-text">
        © {new Date().getFullYear()} Mark-T. All rights reserved.
      </p>
      <div className="footer-links">
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <button className="footer-up" onClick={scrollToTop}>Up</button>
    </footer>
  );
}

export default Footer;
