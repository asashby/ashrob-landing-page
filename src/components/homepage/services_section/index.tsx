import React from 'react';
import ServiceCard from './service_card/index.tsx';
import './styles.scss';

const services = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cfe5978c7e523dde0cd93b3a7091ac35fad7ff317dfff121e66e48635954?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294",
    title: "Design & Build",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf0a354c01a0d4206b3f31e8c41b810518dfbc1d4ab259cda07cfa8a8e2bc8d1?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294",
    title: "Construction",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8f180172e85ba095702ab199bbe685afbc59d1408cbc776089f93e970394e4b?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294",
    title: "Interior Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2114df6481a769050a5dc5d432ec741dd921a6751d191b6afaa45c87e52e31b8?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294",
    title: "Remodels & Renovations",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b618f50d9002dc949f759dabc481e4ebff85b660340897da5f2d9b301ee368f8?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294",
    title: "Site Management",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b4ea87ce07730e34e15974af5ab55c7e0e34bc99e17bbd30ca39dcf211893d6?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294",
    title: "Consultation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <h3 className="services-subtitle">HIGH QUALITY SOLUTIONS IN CIVIL CONSTRUCTION</h3>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;