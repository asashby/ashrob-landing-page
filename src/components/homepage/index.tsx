import React from "react";
import { PresentationScreen } from "./presentation_screen/index.tsx";
import ServicesSection from "./services_section/index.tsx";
import AboutUsSection from "./about_us_section/index.tsx";
import ProjectsSection from "./projects_section/index.tsx";
import NewsSection from "./news_section/index.tsx";
import ContactSection from "./contact_section/index.tsx";
import './styles.scss';
import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
    
    const [t, i18n] = useTranslation("presentation");
    
    return (
        <div>
            <PresentationScreen
                imageSrc="https://ashrob-media.s3.us-east-2.amazonaws.com/image.png"
                title={t("presentation.title")}
                description={t("presentation.subtitle")}
                ctaText={t("presentation.btn_prompt")}/>
            <AboutUsSection/>
            <ServicesSection/>
            <ProjectsSection/>
            <NewsSection/>
            <ContactSection onSubmit={() => {}}/>
        </div>
    );
};

export default HomePage;