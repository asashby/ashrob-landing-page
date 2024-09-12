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
          <p className="property-price">{project.priceText}</p>
        </div>
        <p className="property-location">{project.location}</p>
        <p className="section-title">{t("project_details.description")}</p>
        <p className="property-description">
          {project.description}
        </p>
        <p className="section-title">{t("project_details.nearby")}</p>
        <ul className="nearby-list">
          {project.placesNearby.map((place) => (
            <li>{place}</li>
          ))}
        </ul>
        <p className="section-title">{t("project_details.payment_info")}</p>
        <ul className="payment-info">
          {project.paymentInformation}
        </ul>
        <p className="section-title">{t("project_details.areas")}</p>
        <p className="subsection-title">{t("project_details.spaces_title")}</p>
        <div className="property-specs">
          <div className="spec-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddf1c63e907169993b584db7bd799330da930eac2dafc595ad24dd9f4b86f4f8?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" alt="" className="spec-icon" />
            <span className="spec-label">{t("project_details.spaces.floors")}</span>
            <span className="spec-value">{project.areas.spaces.floors}</span>
          </div>
          <div className="spec-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/86b1f11291716efec731e94d820037b4afeb8c6834ce37964e3cf2d6585f8e0d?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" alt="" className="spec-icon" />
            <span className="spec-label">{t("project_details.spaces.bathrooms")}</span>
            <span className="spec-value">{project.areas.spaces.bathrooms}</span>
          </div>
          <div className="spec-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c30dce9bc6b5604c47d65fb79191a447819af21c521570d20e6b9d2351367fb7?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" alt="" className="spec-icon" />
            <span className="spec-label">{t("project_details.spaces.bedrooms")}</span>
            <span className="spec-value">{project.areas.spaces.bedrooms}</span>
          </div>
          <div className="spec-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c980035bff4fed31c30e1e6f5c84c9c5ab749abdd0f098c134b30943392399?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" alt="" className="spec-icon" />
            <span className="spec-label">{t("project_details.spaces.parking")}</span>
            <span className="spec-value">{project.areas.spaces.parkingSpots}</span>
          </div>
        </div>
        <h3 className="subsection-title">{t("project_details.surfaces_title")}</h3>
        <div className="property-specs">
          <div className="spec-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/15914973ac1424d05d17c02ed353f2753e7e1d90ab617d10de9f29c892965f30?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" alt="" className="spec-icon" />
            <span className="spec-label">{t("project_details.surfaces.land_area")}</span>
            <span className="spec-value">{project.areas.surfaces.landArea}</span>
          </div>
          <div className="spec-item">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/56c12c2887cb7dd9d51dbd5155f1798bb00c0b25cd2d508e364477884b8b59ab?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" alt="" className="spec-icon" />
            <span className="spec-label">{t("project_details.surfaces.living_area")}</span>
            <span className="spec-value">{project.areas.surfaces.livingArea}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;