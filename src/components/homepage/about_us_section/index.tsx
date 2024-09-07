import React from 'react';
import './styles.scss';

const AboutUsSection: React.FC = () => {
  return (
    <main className="aboutUsContainer">
        <div className="header">
            <h1 className="title">About Us</h1>
            <h2 className="subtitle">DEDICATED TO TRANSFORMING VISIONS INTO REALITY</h2>
        </div>
        <section className="missionSection">
            <div className="missionContent">
                <div className="imageWrapper">
                    <img 
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e214e3fe97e4910dc67c0baef846703ce658a318ebc6772f80fd748cae01071f?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" 
                        alt="Our mission visual representation" 
                        className="missionImage"
                    />
                </div>
                <div className="textContent">
                    <p className="missionText">
                        Our mission is to deliver superior construction solutions that are both innovative and sustainable. We strive to build structures that stand the test of time, while also making a positive impact on our local community. Integrity, professionalism, and quality are at the core of everything we do.
                    </p>
                    <button className="learnMoreButton">Learn more</button>
                </div>
            </div>
        </section>
    </main>
  );
};

export default AboutUsSection;