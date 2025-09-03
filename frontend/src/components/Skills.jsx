// src/components/Skills.jsx

import React from 'react';

// The component no longer needs props for click handling
const Skills = ({ skills }) => {
  return (
    <section>
      <h2>Top Skills</h2>
      <div className="skills-container">
        {skills.sort((a, b) => b.proficiency - a.proficiency).map(skill => (
          // The button is now just a span for display purposes
          <span key={skill.name} className="skill-tag">
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;