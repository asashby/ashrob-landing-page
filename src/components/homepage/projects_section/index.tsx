import React from 'react';
import ProjectCard from './project_card/index.tsx';
import './styles.scss';
import { useTranslation } from "react-i18next";
import GetProjectsData from '../../../data/projects.tsx';

const ProjectsSection: React.FC = () => {
  
  const [t, i18n] = useTranslation("projects");

  return (
    <section className="projects-section" id='projects-section-ref'>
      <h1 className="projects-title">{t("projects.title")}</h1>
      {GetProjectsData().map((project) => (
        <ProjectCard key={project.id} project={project} btn_prompt={t("projects.details_btn")} />
      ))}
    </section>
  );
};

export default ProjectsSection;