import React from 'react';
import InputField from './input_field/index.tsx';
import Button from './button/index.tsx';
import './styles.scss';
import { useTranslation } from "react-i18next";

interface ContactSectionProps {
  onSubmit: (formData: FormData) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit(formData);
  };
    
  const [t, i18n] = useTranslation("contact");

  return (
    <section className="contact-section"  id='contact-section-ref'>
      <header className="contact-header">
        <h2 className="contact-title">
          <span className="contact-title-main">{t("contact.title_1")}</span>
          <span className="contact-title-accent">{t("contact.title_2")}</span>
        </h2>
      </header>
      <p className="contact-description">
        {t("contact.description_1")}
        <br />
        {t("contact.description_2")}
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <InputField name="firstName" label={t("contact.first_name")} type="text" />
          <InputField name="lastName" label={t("contact.last_name")} type="text" />
        </div>
        <div className="form-row">
          <InputField name="email" label={t("contact.email")} type="email" />
          <InputField name="phone" label={t("contact.phone")} type="tel" />
        </div>
        <InputField name="message" label={t("contact.message")} type="textarea" />
        <Button type="submit">{t("contact.btn_prompt")}</Button>
      </form>
    </section>
  );
};

export default ContactSection;