import React from 'react';
import './styles.scss';
import Amenities from './amenities/index.tsx';
import Areas from './areas/index.tsx';
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
        <div className="specific-details-container">
          <div>
            <Areas project={projectData}/>
            <Amenities />
            <NearbyPlaces />
            <ContactInfo contacts={projectData.contacts}/>
          </div>
          <div>
            <Location location={projectData.mapLocation}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;