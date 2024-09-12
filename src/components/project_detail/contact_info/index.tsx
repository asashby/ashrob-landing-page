import React from 'react';
import '../styles.scss';
import { useTranslation } from "react-i18next";

interface ContactInfoProps {
  profilePic: string;
  name: string;
  phone: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({profilePic, name, phone, email}) => {
  
  const [t, i18n] = useTranslation("project_details");

  return (
    <div className="contact-info">
      <h2 className="section-title">{t("project_details.contact")}</h2>
      <div className="contact-details">
        <img src={profilePic} alt={name} className="contact-image" />
        <div className="contact-text">
          <h3 className="contact-name">{name}</h3>
          <p className="contact-phone">{phone}</p>
          <p className="contact-email">{email}</p>
        </div>
      </div>
      <a href={"https://wa.me/" + (phone.replace(/\D/g,'')).replace(/\s/g,'') + "/"} target="_blank" className="whatsapp-button">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3a9d98d71c30eb5b6bb62837748ad822fc321dbe8e4c08601f16c4274eb3fbf?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294" alt="" className="whatsapp-icon" />
        {t("project_details.whatsapp_prompt")}
      </a>
    </div>
  );
};

export default ContactInfo;