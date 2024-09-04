import React from 'react';
import './styles.scss';

const FooterLinks: React.FC = () => {
  return (
    <nav className="footer-nav">
      <a href="/services" className="footer-link">Services</a>
      <a href="/about" className="footer-link">About Us</a>
    </nav>
  );
};

export default FooterLinks;