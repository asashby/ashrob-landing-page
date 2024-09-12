import React, { MutableRefObject } from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NavLinks: React.FC = () => {
  const [t, i18n] = useTranslation("header");

  function scrollToElement(elementId){
    const element = document.getElementById(elementId);
    element?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <nav className="nav-links">
      <Link to="/#about-us-section-ref" className="nav-link">{t("header.about_us")}</Link>
      <Link to="/#services-section-ref" className="nav-link">{t("header.services")}</Link>
      <Link to="/#projects-section-ref" className="nav-link">{t("header.projects")}</Link>
      <Link to="/#news-section-ref" className="nav-link">{t("header.blog")}</Link>
      <Link to="/#contact-section-ref" className="nav-link">{t("header.contact")}</Link>
    </nav>
  );
};

export default NavLinks;