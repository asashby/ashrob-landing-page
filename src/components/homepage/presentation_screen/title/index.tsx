import React from 'react';
import './styles.scss';

interface TitleProps {
  text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <>
      <h1 className="presentation-title">{text}</h1>
    </>
  );
};