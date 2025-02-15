import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact-container" id="contact">
  <h2>Contacts</h2>
  <p className="contact-desc">Feel free to reach out or check my profiles.</p>
  <div className="contact-links">
    <span className="contact-item contact-email">youremail@example.com</span>
    <a href="https://kwork.ru/user/yourkwork" target="_blank" rel="noopener noreferrer" className="contact-item">
      Kwork
    </a>
    <a href="https://hh.ru/resume" target="_blank" rel="noopener noreferrer" className="contact-item">
      HeadHunter
    </a>
    <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="contact-item">
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="contact-item">
      LinkedIn
    </a>
  </div>
</section>

  );
}

export default Contact;
