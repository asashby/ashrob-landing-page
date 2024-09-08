import React from 'react';
import './styles.scss';

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
      <a href="/about" className="footer-link">{about_us}</a>
      <a href="/services" className="footer-link">{services}</a>
      <a href="/projects" className="footer-link">{projects}</a>
      <a href="/blog" className="footer-link">{blog}</a>
      <a href="/contact" className="footer-link">{contact}</a>
    </nav>
  );
};

export default FooterLinks;