import React from 'react';
import './styles.scss';

interface BackgroundImageProps {
  src: string;
  alt: string;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, alt }) => {
  return (
    <>
      <img src={src} alt={alt} className="background-image" />
    </>
  );
};