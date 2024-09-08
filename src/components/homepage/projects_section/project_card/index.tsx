import React from 'react';
import { ProjectData } from '../types.ts';
import './styles.scss';

interface ProjectCardProps {
  project: ProjectData;
  btn_prompt: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, btn_prompt }) => {
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
          <div className="status-ribbon" style={{ backgroundColor: project.statusColor }}>{project.status}</div>
        </div>
        <p className="project-description">{project.description}</p>
        <button className="details-button">{btn_prompt}</button>
      </div>
    </article>
  );
};

export default ProjectCard;