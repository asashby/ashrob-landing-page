import React from 'react';
import ProjectCard from './project_card/index.tsx';
import { ProjectData } from './types.ts';
import './styles.scss';
import { useTranslation } from "react-i18next";

interface ProjectsSectionProps {
    ref: any;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ref}) => {
    
  const [t, i18n] = useTranslation("projects");

  const projectsData: ProjectData[] = [
    {
      id: 1,
      title: t("projects.projects.sunshine_1.title"),
      location: t("projects.projects.sunshine_1.location"),
      status: t("projects.on_sale"),
      statusColor: "rgba(33, 198, 0, 1)",
      description: t("projects.projects.sunshine_1.description"),
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a85507906134543042c29b8333d67a1c53e375e4c23d19c91d4b936c7e821e77?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294"
    },
    {
      id: 2,
      title: t("projects.projects.sunshine_2.title"),
      location: t("projects.projects.sunshine_2.location"),
      status: t("projects.sold_out"),
      statusColor: "rgba(198, 0, 0, 1)",
      description: t("projects.projects.sunshine_2.description"),
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a85507906134543042c29b8333d67a1c53e375e4c23d19c91d4b936c7e821e77?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294"
    },
    {
      id: 3,
      title: t("projects.projects.sunshine_3.title"),
      location: t("projects.projects.sunshine_3.location"),
      status: t("projects.almost_gone"),
      statusColor: "rgba(234, 162, 5, 1)",
      description: t("projects.projects.sunshine_3.description"),
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a85507906134543042c29b8333d67a1c53e375e4c23d19c91d4b936c7e821e77?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294"
    }
  ];

  return (
    <section className="projects-section">
      <h1 className="projects-title" ref={ref}>{t("projects.title")}</h1>
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} btn_prompt={t("projects.details_btn")} />
      ))}
    </section>
  );
};

export default ProjectsSection;