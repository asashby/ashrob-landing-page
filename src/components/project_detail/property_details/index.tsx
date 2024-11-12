import React from 'react';
import '../styles.scss';
import { ProjectData } from '../../homepage/projects_section/types';
import { useTranslation } from "react-i18next";

interface PropertyDetailsProps {
  project: ProjectData;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({project}) => {

  const [t, i18n] = useTranslation("project_details");

  return (
    <>
      <div className="property-details">
        <div className="property-details-header">
          <p className="property-title">{project.title}</p>
          <div className="status-ribbon" style={{ backgroundColor: project.statusColor }}>{project.status}</div>
        </div>
        <p className="property-location">{project.location}</p>
        <p className="property-price">{project.priceText}</p>
        <p className="section-title">{t("project_details.description")}</p>
        <p className="property-description">
          {project.description}
        </p>
        <p className="section-title">{t("project_details.nearby")}</p>
        <ul className="nearby-list">
          {project.placesNearby.map((place) => (
            <li className='nearby-list-item'>{place}</li>
          ))}
        </ul>
        <p className="section-title">{t("project_details.payment_info")}</p>
        <ul className="payment-info">
          {project.paymentInformation}
        </ul>
        <a className="payment-info-file" href='https://ashrob-media.s3.us-east-2.amazonaws.com/sunshine-1/Sistema+de+pagos.pdf' download="Sistema_de_pagos.pdf" target="_blank">
          {t("project_details.payment_info_file_caption")}
        </a>
      </div>
    </>
  );
};

export default PropertyDetails;