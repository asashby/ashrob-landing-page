import React from "react";
import { PresentationScreen } from "./presentation_screen/index.tsx";
import ServicesSection from "./services_section/index.tsx";
import AboutUsSection from "./about_us_section/index.tsx";
import ProjectsSection from "./projects_section/index.tsx";
import NewsSection from "./news_section/index.tsx";
import ContactSection from "./contact_section/index.tsx";
import './styles.scss';

const HomePage: React.FC = () => {
    return (
        <div>
            <PresentationScreen
                imageSrc="https://ashrob-media.s3.us-east-2.amazonaws.com/image.png"
                title="Your dreams are here"
                description="We work to bring the things that you dream into reality"
                ctaText="Check our projects"/>
            <ServicesSection/>
            <AboutUsSection/>
            <ProjectsSection/>
            <NewsSection/>
            <ContactSection onSubmit={() => {}}/>
        </div>
    );
};

export default HomePage;