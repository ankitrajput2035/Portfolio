// src/components/Skills.jsx
import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section>
      <h2>Top Skills</h2>
      <div className="skills-container">
        {(skills && Array.isArray(skills) ? skills : []).sort((a, b) => b.proficiency - a.proficiency).map(skill => (
          <span key={skill.name} className="skill-tag">
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;