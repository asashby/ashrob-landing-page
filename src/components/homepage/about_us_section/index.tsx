import React from 'react';
import './styles.scss';
import { useTranslation } from "react-i18next";

interface AboutUsSectionProps {
    ref: any;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ref}) => {
    
    const [t, i18n] = useTranslation("about_us");

    return (
        <main className="aboutUsContainer">
            <div className="header">
                <h1 className="about-us-title" ref={ref}>{t("about_us.title")}</h1>
                <h2 className="subtitle">{t("about_us.subtitle")}</h2>
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
                            {t("about_us.description")}
                        </p>
                        <button className="learnMoreButton">{t("about_us.btn_prompt")}</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUsSection;