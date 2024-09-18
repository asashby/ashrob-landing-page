import React from 'react';
import './styles.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  onPressed: any;
}

const NavLinks: React.FC<NavLinksProps> = ({onPressed}) => {
  const [t, i18n] = useTranslation("header");

  return (
    <nav className="nav-links">
      <Link to="/#about-us-section-ref" className="nav-link" onClick={onPressed}>{t("header.about_us")}</Link>
      <Link to="/#services-section-ref" className="nav-link" onClick={onPressed}>{t("header.services")}</Link>
      <Link to="/#projects-section-ref" className="nav-link" onClick={onPressed}>{t("header.projects")}</Link>
      <Link to="/#news-section-ref" className="nav-link" onClick={onPressed}>{t("header.blog")}</Link>
      <Link to="/#contact-section-ref" className="nav-link" onClick={onPressed}>{t("header.contact")}</Link>
    </nav>
  );
};

export default NavLinks;