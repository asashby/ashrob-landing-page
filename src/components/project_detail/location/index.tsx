import React from 'react';
import '../styles.scss';
import { useTranslation } from "react-i18next";

interface LocationProps {
  location: string;
}

const Location: React.FC<LocationProps> = ({location}) => {
    const allowFullScreen = false;
    const tabIndex = 0;
    const [t, i18n] = useTranslation("project_details");

  return (
    <div className="location">
      <p className="section-title">{t("project_details.location")}</p>
      <div className="location-container">
        <iframe className='location-frame'
            src={location}
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen={allowFullScreen}
            aria-hidden="false"
            tabIndex={tabIndex}
        />
      </div>
    </div>
  );
};

export default Location;