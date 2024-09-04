import React from 'react';
import './styles.scss';

interface DescriptionProps {
  text: string;
}

export const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <>
      <p className="description">{text}</p>
    </>
  );
};