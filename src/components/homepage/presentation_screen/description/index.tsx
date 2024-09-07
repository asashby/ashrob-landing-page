import React from 'react';
import './styles.scss';

interface DescriptionProps {
  text: string;
}

export const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <>
      <p className="presentation-description">{text}</p>
    </>
  );
};