import React from 'react';
import ProjectCard from './project_card/index.tsx';
import { ProjectData } from './types.ts';
import './styles.scss';

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Sunshine I",
    location: "Bavaro, Punta Cana, DR",
    status: "ON SALE",
    statusColor: "rgba(33, 198, 0, 1)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u...",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a85507906134543042c29b8333d67a1c53e375e4c23d19c91d4b936c7e821e77?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294"
  },
  {
    id: 2,
    title: "Sunshine II",
    location: "Bavaro, Punta Cana, DR",
    status: "SOLD OUT",
    statusColor: "rgba(198, 0, 0, 1)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u...",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a85507906134543042c29b8333d67a1c53e375e4c23d19c91d4b936c7e821e77?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294"
  },
  {
    id: 3,
    title: "Sunshine III",
    location: "Bavaro, Punta Cana, DR",
    status: "ALMOST GONE",
    statusColor: "rgba(234, 162, 5, 1)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi u...",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a85507906134543042c29b8333d67a1c53e375e4c23d19c91d4b936c7e821e77?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Projects</h1>
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      <p className="more-soon">MORE SOON</p>
    </section>
  );
};

export default ProjectsSection;