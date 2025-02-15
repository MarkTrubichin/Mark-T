import React, { useEffect, useState } from "react";
import "../styles/skills.css";

function Skills() {
  const [skills, setSkills] = useState([]);


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/skills/")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error loading skills:", error));
  }, []);

  return (
    <section id="skills" className="skills-container">
      <h2 className="header">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-icon-container">
              <span className="skill-icon">{skill.icon}</span>
            </div>
            <p className="skill-name">{skill.name}</p>
            {skill.level && <p className="skill-level">{skill.level}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
