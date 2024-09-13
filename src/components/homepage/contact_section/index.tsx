import React, { useEffect, useRef, useState } from 'react';
import InputField from './input_field/index.tsx';
import Button from './button/index.tsx';
import './styles.scss';
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';

interface ContactSectionProps {
  onSubmit: (formData: FormData) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onSubmit }) => {
  
  useEffect(() => emailjs.init("vA8wmLotO6UK8QzhS"), []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(''); 
  const firstNameRef = useRef<HTMLInputElement>();
  const lastNameRef = useRef<HTMLInputElement>();
  const emailRef = useRef<HTMLInputElement>();
  const phoneRef = useRef<HTMLInputElement>();
  const messageRef = useRef<HTMLInputElement>();
  const [loading, setLoading] = useState(false);
    
  const [t, i18n] = useTranslation("contact");
  
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "ashrob-building";
    const templateId = "template_e3gmslp";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        message: message
      });
      alert("Información enviada");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit(formData);
  };

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
          <InputField name="firstName" label={t("contact.first_name")} type="text" ref={firstNameRef} value={firstName} onChange={e => setFirstName(e.target.value)} />
          <InputField name="lastName" label={t("contact.last_name")} type="text" ref={lastNameRef} value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>
        <div className="form-row">
          <InputField name="email" label={t("contact.email")} type="email" ref={emailRef} value={email} onChange={e => setEmail(e.target.value)}  />
          <InputField name="phone" label={t("contact.phone")} type="number" ref={phoneRef} value={phone} onChange={e => setPhone(e.target.value)}  />
        </div>
        <InputField name="message" label={t("contact.message")} type="textarea"  ref={messageRef} value={message} onChange={e => setMessage(e.target.value)} />
        <Button type="submit" onClick={sendEmail}>{t("contact.btn_prompt")}</Button>
      </form>
    </section>
  );
};

export default ContactSection;