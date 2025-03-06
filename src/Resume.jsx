import React from "react";
import "./Resume.css"; // Importing the CSS file

export const Resume = () => {
  return (
    <section className="resume-section">
      <div className="resume-container">
        <h1>Resume</h1>
        <p>Download my resume to preview my work experience and skills.</p>
        <a href="/MyPortfolio/Deepeshkunkulol_Resume.pdf" download="Deepeshkunkulol_Resume.pdf">
          <button className="download-button">Download Resume</button>
        </a>
      </div>
    </section>
  );
};
