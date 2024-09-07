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
          <Logo />
        </div>
        <div className="footer-section">
          <FooterLinks />
        </div>
        <div className="links-container">
          <p className="copyright">
            Copyright © {copyrightYear} {companyName}
          </p>
          <div className="social-section">
            <p className="follow-us">Follow us:</p>
            <SocialIcons />
          </div>
          <div className="legal-links">
            <a href="/terms" className="legal-link">Terms of use</a>
            <span className="separator">|</span>
            <a href="/privacy" className="legal-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;