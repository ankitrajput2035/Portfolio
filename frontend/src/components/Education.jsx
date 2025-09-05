// src/components/Education.jsx

import React from 'react';

const Education = ({ educationHistory }) => {
  return (
    <section>
      <h2>Education</h2>
      <div className="education-list">
        {(educationHistory && Array.isArray(educationHistory) ? educationHistory : []).map(edu => (
          <div key={edu.institution} className="card education-card">
            <h3>{edu.EducationLevel}</h3>
            <p className="institution">{edu.institution}</p>
            <p>{edu.marks}</p>
            <p className="date">{edu.start_date} – {edu.end_date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;