import React from 'react';
import './styles.scss';

const Logo: React.FC = () => {
  return (
    <div className="logo">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/08b58f84b4ecefb1fac39e3a9786516cc238bed35bc2c23d555b4e62216bc14d?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" alt="Ashrob Building Company Logo" className="logo-image" />
      <div className="logo-text">
        ASHROB <br /> BUILDING
      </div>
    </div>
  );
};

export default Logo;