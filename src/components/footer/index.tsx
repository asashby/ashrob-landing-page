import React from 'react';
import SocialIcons from './social_icons/index.tsx';
import FooterLinks from './footer_links/index.tsx';
import Logo from './logo/index.tsx';
import './styles.scss';
import { useTranslation } from "react-i18next";

interface FooterProps {
  copyrightYear: number;
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ copyrightYear, companyName }) => {
    
  const [t, i18n] = useTranslation("footer");

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <Logo />
        </div>
        <div className="links-section">
          <FooterLinks 
            about_us={t("footer.about_us")}
            services={t("footer.services")}
            projects={t("footer.projects")}
            blog={t("footer.blog")}
            contact={t("footer.contact")}
          />
        </div>
        <div className="links-container">
          <p className="copyright">
            Copyright © {copyrightYear} {companyName}
          </p>
          <div className="social-section">
            <p className="follow-us">{t("footer.follow_us")}</p>
            <SocialIcons />
          </div>
          <div className="legal-links">
            <a href="/terms" className="legal-link">{t("footer.terms")}</a>
            <span className="separator">|</span>
            <a href="/privacy" className="legal-link">{t("footer.privacy")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;