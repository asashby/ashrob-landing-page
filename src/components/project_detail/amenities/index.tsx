import React from 'react';
import '../styles.scss';
import { useTranslation } from "react-i18next";

interface AmenityProps {
  icon: string;
  label: string;
}

const Amenity: React.FC<AmenityProps> = ({ icon, label }) => (
  <div className="amenity-item">
    <img src={icon} alt="" className="amenity-icon" />
    <span className="amenity-label">{label}</span>
  </div>
);

const Amenities: React.FC = () => {
  
  const [t, i18n] = useTranslation("project_details");

  const amenities = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/72067b1df6b716e62f7c2fddbebe2e9631bc56e8c90b971aa555b49df7aa9f34?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", label: t("project_details.amenities.backyard") },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b006b40e49b758c08b4032e9d3aa801faa97759802f5c5903f1eb95a7106995f?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", label: t("project_details.amenities.kitchen") },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ddd4bb41607246ba7cec29ac639c30f86f43b3ca45bf034cf97dfee8a403ee3?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", label: t("project_details.amenities.pool") },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/54a43e854c71f3e67f112f228e0abe68b03988162cd8eb7d230b1a0e2bcafde7?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", label: t("project_details.amenities.laundry") }
  ];

  return (
    <div className="amenities">
      <h2 className="section-title">{t("project_details.amenities_title")}</h2>
      <div className="amenities-list">
        {amenities.map((amenity, index) => (
          <Amenity key={index} icon={amenity.icon} label={amenity.label} />
        ))}
      </div>
    </div>
  );
};

export default Amenities;