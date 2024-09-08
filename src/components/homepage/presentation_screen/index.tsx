import React from 'react';
import { BackgroundImage } from './background_image/index.tsx';
import { Title } from './title/index.tsx';
import { Description } from './description/index.tsx';
import { CallToAction } from './call_to_action/index.tsx';
import './styles.scss';

interface PresentationScreenProps {
  imageSrc: string;
  title: string;
  description: string;
  ctaText: string;
}

export const PresentationScreen: React.FC<PresentationScreenProps> = ({
  imageSrc,
  title,
  description,
  ctaText
}) => {
  return (
    <section className="dream-section">
      <BackgroundImage src={imageSrc} alt="" />
      <div className="content-wrapper">
        <Title text={title} />
        <Description text={description} />
        <CallToAction text={ctaText} />
      </div>
    </section>
  );
};