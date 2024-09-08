import React from 'react';
import './styles.scss';

const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2ee3e2ad79f5214ff1d272d3267d56011a9a21806f0a2a9f4498b59ab4dfa06?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" alt="Ashrob Building Logo" className="header-logo-image" />
      <div className="header-logo-text">
        ASHROB <br /> BUILDING
      </div>
    </div>
  );
};

export default Logo;