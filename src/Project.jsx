import React, { useState } from "react";
import "./Projects.css"; // Import the CSS file

const projects = [
  {
    id: 1,
    title: "Movie Search App",
    image: "MovieSearch.png",
    screenshots: ["Movie1.png", "Movie2.png"]
  },
  {
    id: 2,
    title: "Stopwatch App",
    image: "Stopwatch1.png",
    screenshots: ["Stopwatch1.png", "Stopwatch2.png", "Stopwatch3.png", "Stopwatch4.png"]
  },
  {
    id: 3,
    title: "Recipe Website",
    image: "Recipe3.png",
    screenshots: ["Recipe1.png", "Recipe12.png", "Recipe3.png"]
  },
  // Add more projects here
];

export const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <div  className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <img loading="lazy" src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Section */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button style={{marginTop:'100px'}} className="close-btn" onClick={() => setSelectedProject(null)}>✖</button>
            <h2 style={{color:"white"}}>{selectedProject.title}</h2>
            <div className="modal-screenshots">
              {selectedProject.screenshots.map((src, index) => (
                <img key={index} src={src} alt={`Screenshot ${index + 1}`} />
              ))}
            </div>
            {/* <pre  className="code-snippet">
              <code>{selectedProject.codeSnippet}</code>
            </pre> */}
          </div>
        </div>
      )}
    </section>
  );
};
