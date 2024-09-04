import React from 'react';
import { ProjectData } from '../types.ts';
import './styles.scss';

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="project-card">
      <div className="image-container">
        <img src={project.imageUrl} alt={`${project.title} project`} className="project-image" />
      </div>
      <div className="content-container">
        <div className="header">
          <div className="title-location">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-location">{project.location}</p>
          </div>
          <div className="status-badge" style={{ backgroundColor: project.statusColor }}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b7cc4f535c3e7bc744f605de7fdf66d87e9946dd5db0d1eec174e975f6da9a9?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" alt="" className="status-icon" />
            <span className="status-text">{project.status}</span>
          </div>
        </div>
        <p className="project-description">{project.description}</p>
        <button className="details-button">Details</button>
      </div>
    </article>
  );
};

export default ProjectCard;