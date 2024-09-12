import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

interface FooterLinksProps {
  about_us: string;
  services: string;
  projects: string;
  blog: string;
  contact: string;
}

const FooterLinks: React.FC<FooterLinksProps> = ({about_us, services, projects, blog, contact}) => {
  return (
    <nav className="footer-nav">
      <Link to="/#about-us-section-ref" className="footer-link">{about_us}</Link>
      <Link to="/#services-section-ref" className="footer-link">{services}</Link>
      <Link to="/#projects-section-ref" className="footer-link">{projects}</Link>
      <Link to="/#news-section-ref" className="footer-link">{blog}</Link>
      <Link to="/#contact-section-ref" className="footer-link">{contact}</Link>
    </nav>
  );
};

export default FooterLinks;