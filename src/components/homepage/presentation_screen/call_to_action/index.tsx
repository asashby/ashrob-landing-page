import React from 'react';
import './styles.scss';

interface CallToActionProps {
  text: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({ text }) => {
  return (
    <>
      <button className="cta-button">{text}</button>
    </>
  );
};