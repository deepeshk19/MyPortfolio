import React from "react";
import "./Skills.css"; // Import the CSS file

const skills = ["React", "JavaScript", "HTML", "CSS", "Java", "SpringBoot"];

export const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
      <h1 class="skills-title">Skills</h1>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
