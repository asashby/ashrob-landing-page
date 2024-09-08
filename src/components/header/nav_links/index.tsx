import React, { MutableRefObject } from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';

interface NavLinksProps {
  aboutUsRef: any;
  servicesRef: any;
  projectsRef: any;
  blogRef: any;
  contactRef: any;
}

const NavLinks: React.FC<NavLinksProps> = ({aboutUsRef, servicesRef, projectsRef, blogRef, contactRef}) => {
  const [t, i18n] = useTranslation("header");
  const scrollToAboutUs = () => {
    const element = document.getElementById("about-us-title");
    element!.scrollIntoView();
  }

  return (
    <nav className="nav-links">
      <a key={t("header.about_us")} className="nav-link">
        {t("header.about_us")}
      </a>
      <a key={t("header.services")} className="nav-link">
        {t("header.services")}
      </a>
      <a key={t("header.projects")} className="nav-link">
        {t("header.projects")}
      </a>
      <a key={t("header.blog")} className="nav-link">
        {t("header.blog")}
      </a>
      <a key={t("header.contact")} className="nav-link">
        {t("header.contact")}
      </a>
    </nav>
  );
};

export default NavLinks;