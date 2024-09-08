import React from "react";
import { PresentationScreen } from "./presentation_screen/index.tsx";
import ServicesSection from "./services_section/index.tsx";
import AboutUsSection from "./about_us_section/index.tsx";
import ProjectsSection from "./projects_section/index.tsx";
import NewsSection from "./news_section/index.tsx";
import ContactSection from "./contact_section/index.tsx";
import './styles.scss';
import { useTranslation } from "react-i18next";

interface HomePageProps {
    aboutUsRef: any;
    servicesRef: any;
    projectsRef: any;
    blogRef: any;
    contactRef: any;
}

const HomePage: React.FC<HomePageProps> = ({aboutUsRef, servicesRef, projectsRef, blogRef, contactRef}) => {
    
    const [t, i18n] = useTranslation("presentation");
    
    return (
        <div>
            <PresentationScreen
                imageSrc="https://ashrob-media.s3.us-east-2.amazonaws.com/image.png"
                title={t("presentation.title")}
                description={t("presentation.subtitle")}
                ctaText={t("presentation.btn_prompt")}/>
            <AboutUsSection ref={aboutUsRef}/>
            <ServicesSection ref={servicesRef}/>
            <ProjectsSection ref={projectsRef}/>
            <NewsSection ref={blogRef}/>
            <ContactSection onSubmit={() => {}} ref={contactRef}/>
        </div>
    );
};

export default HomePage;