import React from 'react';
import SocialIcons from './social_icons/index.tsx';
import FooterLinks from './footer_links/index.tsx';
import Logo from './logo/index.tsx';
import './styles.scss';

interface FooterProps {
  copyrightYear: number;
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ copyrightYear, companyName }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <FooterLinks />
          <p className="copyright">
            Copyright © {copyrightYear} {companyName}
          </p>
        </div>
        <div className="footer-section">
          <Logo />
          <div className="social-section">
            <p className="projects">Projects</p>
            <p className="follow-us">Follow us:</p>
            <SocialIcons />
          </div>
        </div>
        <div className="footer-section">
          <p className="blog">Blog</p>
          <div className="contact-section">
            <p className="contact">Contact</p>
            <div className="legal-links">
              <a href="/terms" className="legal-link">Terms of use</a>
              <span className="separator">|</span>
              <a href="/privacy" className="legal-link">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;