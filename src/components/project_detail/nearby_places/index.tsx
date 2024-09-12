import React from 'react';
import '../styles.scss';
import { useTranslation } from "react-i18next";

interface NearbyPlaceProps {
  icon: string;
  label: string;
}

const NearbyPlace: React.FC<NearbyPlaceProps> = ({ icon, label }) => (
  <div className="nearby-item">
    <img src={icon} alt="" className="nearby-icon" />
    <span className="nearby-label">{label}</span>
  </div>
);

const NearbyPlaces: React.FC = () => {
  
  const [t, i18n] = useTranslation("project_details");

  const places = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a8829babc246e6483ed402bc62f5f56684ed1c8dacda159981aa3a4c952cd4a?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", label: t("project_details.close_to.park") },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/041d74eddeef19cfac52f00ec82861beb02e3df4de05b18e9602bb3c1763c046?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", label: t("project_details.close_to.school") },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8dc90f5e6cabac93ac52f458ad2771cb628993da1e77a22e3c9e1dc260526d33?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", label: t("project_details.close_to.shops") },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d8ea599ff5208c50ec1172cb670dc1c2ff641507827a109055e18dd92080730b?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", label: t("project_details.close_to.gym") },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c8112bf63e2064246ee8ad64a85e76626b41060b6718d2eaa533d0f9acb2b84?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", label: t("project_details.close_to.hospital") },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/227091bc9217dc9174680cc69da95d3efecdee43911babd70b07928a6c302cf4?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", label: t("project_details.close_to.airport") },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d1a0adaa98b53deb286669d24e825e02cc2eeebcd8d7b729a5b7ccc88bf1e33?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", label: t("project_details.close_to.banks") },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ac8674979e90664d5d3040cb3443016375bf68ec232c724edc81d3734107661?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294", label: t("project_details.close_to.golf") }
  ];

  return (
    <div className="nearby-places">
      <h2 className="section-title">{t("project_details.close_to_title")}</h2>
      <div className="nearby-grid">
        {places.map((place, index) => (
          <NearbyPlace key={index} icon={place.icon} label={place.label} />
        ))}
      </div>
    </div>
  );
};

export default NearbyPlaces;