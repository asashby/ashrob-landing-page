import React from 'react';
import InputField from './input_field/index.tsx';
import Button from './button/index.tsx';
import './styles.scss';

interface ContactSectionProps {
  onSubmit: (formData: FormData) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onSubmit(formData);
  };

  return (
    <section className="contact-section">
      <header className="contact-header">
        <h2 className="contact-title">
          <span className="contact-title-main">GET IN</span>
          <span className="contact-title-accent">TOUCH</span>
        </h2>
      </header>
      <p className="contact-description">
        We'd love to hear from you and are happy to discuss the right solution to build your dream home.
        <br />
        Contact us now on:
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <InputField name="firstName" label="First Name" type="text" />
          <InputField name="lastName" label="Last Name" type="text" />
        </div>
        <div className="form-row">
          <InputField name="email" label="Your Email" type="email" />
          <InputField name="phone" label="Your Phone" type="tel" />
        </div>
        <InputField name="message" label="Message" type="textarea" />
        <Button type="submit">Submit</Button>
      </form>
    </section>
  );
};

export default ContactSection;