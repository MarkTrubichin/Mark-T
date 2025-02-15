import React, { useEffect, useState } from "react";
import "../styles/projects.css";
import { useNavigate } from "react-router-dom";


function Projects() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-type">{project.type}</p> 
            <button onClick={() => navigate(`/projects/${project.id}`)}>More Info</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
