import React from 'react';
import './styles.scss';
import Amenities from './amenities/index.tsx';
import ContactInfo from './contact_info/index.tsx';
import ImageGalleryComponent from './image_gallery/index.tsx';
import Location from './location/index.tsx';
import NearbyPlaces from './nearby_places/index.tsx';
import PropertyDetails from './property_details/index.tsx';
import { ProjectData } from '../homepage/projects_section/types.ts';
import { useParams } from 'react-router-dom';
import GetProjectsData from '../../data/projects.tsx';

interface ProjectDetailPageProps {
    project: ProjectData;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({project}) => {

  let { id } = useParams();
  var projects = GetProjectsData();
  
  var projectData;

  
  for (var i = 0, len = projects.length; i < len; i++) {
    if (projects[i].tag === id) {
        projectData = projects[i];
      break;
    }
  }

  return (
    <div className="property-listing">
      <div className="property-header">
        <ImageGalleryComponent images={projectData.imageGallery} />
      </div>
      <div className="property-main">
        <PropertyDetails project={projectData} />
        <Amenities />
        <Location location={projectData.mapLocation}/>
        <NearbyPlaces />
        <ContactInfo 
            profilePic={projectData.contact.profilePic}
            name={projectData.contact.name}
            phone={projectData.contact.phone}
            email={projectData.contact.email}
        />
      </div>
    </div>
  );
};

export default ProjectDetailPage;