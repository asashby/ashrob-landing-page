import React from 'react';
import './styles.scss';

const FooterLinks: React.FC = () => {
  return (
    <nav className="footer-nav">
      <a href="/services" className="footer-link">Services</a>
      <a href="/about" className="footer-link">About Us</a>
      <a href="/projects" className="footer-link">Projects</a>
      <a href="/blog" className="footer-link">Blog</a>
      <a href="/contact" className="footer-link">Contact</a>
    </nav>
  );
};

export default FooterLinks;