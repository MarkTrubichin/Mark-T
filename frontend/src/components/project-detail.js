import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/project-detail.css";

function ProjectDetails() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/projects/${id}/`)
      .then((response) => response.json())
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка загрузки данных:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>loading...</p>;
  if (!project) return <p>Project no found</p>;

  return (
    <div className="project-details">
      <button className="back-btn" onClick={() => navigate(-1)}>back</button>
      <h2>{project.title}</h2>
      <p><strong>Type:</strong> {project.type}</p>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
        Go to the project
      </a>
    </div>
  );
}

export default ProjectDetails;
