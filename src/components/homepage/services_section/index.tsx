import React from 'react';
import ServiceCard from './service_card/index.tsx';
import { useTranslation } from "react-i18next";
import './styles.scss';

interface ServicesSectionProps {
    ref: any;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ref}) => {
    
  const [t, i18n] = useTranslation("services");
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/04e0cfe5978c7e523dde0cd93b3a7091ac35fad7ff317dfff121e66e48635954?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294",
      title: t("services.design.title"),
      description: t("services.design.description")
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf0a354c01a0d4206b3f31e8c41b810518dfbc1d4ab259cda07cfa8a8e2bc8d1?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294",
      title: t("services.construction.title"),
      description: t("services.construction.description")
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8f180172e85ba095702ab199bbe685afbc59d1408cbc776089f93e970394e4b?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294",
      title: t("services.interior.title"),
      description: t("services.interior.description")
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2114df6481a769050a5dc5d432ec741dd921a6751d191b6afaa45c87e52e31b8?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294",
      title: t("services.renovation.title"),
      description: t("services.renovation.description")
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b618f50d9002dc949f759dabc481e4ebff85b660340897da5f2d9b301ee368f8?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294",
      title: t("services.management.title"),
      description: t("services.management.description")
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b4ea87ce07730e34e15974af5ab55c7e0e34bc99e17bbd30ca39dcf211893d6?placeholderIfAbsent=true&apiKey=c2c728d5f8434b5c80efdb166787b294",
      title: t("services.consultation.title"),
      description: t("services.consultation.description")
    }
  ];

  return (
    <section className="services-section">
      <h2 className="services-title" ref={ref}>{t("services.title")}</h2>
      <h3 className="services-subtitle">{t("services.subtitle")}</h3>
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