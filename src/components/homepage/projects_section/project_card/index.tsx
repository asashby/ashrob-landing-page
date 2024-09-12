import React from 'react';
import { ProjectData } from '../types.ts';
import './styles.scss';
import { NavLink } from 'react-router-dom';

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
        <div className="project-content-header">
          <div className="title-location">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-location">{project.location}</p>
          </div>
          <div className="status-ribbon" style={{ backgroundColor: project.statusColor }}>{project.status}</div>
        </div>
        <p className="project-description">{project.description}</p>
        <NavLink to={"/projects/" + project.tag}>
          <button className="details-button">{btn_prompt}</button>
        </NavLink>
      </div>
    </article>
  );
};

export default ProjectCard;