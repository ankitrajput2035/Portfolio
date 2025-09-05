import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <section>
      <h2>Projects</h2>
      <div className="project-grid">
        {(projects && Array.isArray(projects) && projects.length > 0) ? projects.map(project => (
          <div key={project.title} className="card project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="skills-container">
              {project.skills.map(skill => <span key={skill} className="skill-tag small">{skill}</span>)}
            </div>
            <div className="links">
              {project.repo_url && <a href={project.repo_url} target="_blank" rel="noopener noreferrer">Repo</a>}
             
              {project.live_url && <a href={project.live_url} target="_blank" rel="noopener noreferrer">Live Demo</a>}
            </div>
          </div>
        )) : <p>No projects available.</p>}
      </div>
    </section>
  );
};

export default ProjectList;