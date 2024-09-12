import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider } from 'react-router-dom';

import header_en from "./resources/languages/en/header.json";
import about_us_en from "./resources/languages/en/about_us.json";
import blog_en from "./resources/languages/en/blog.json";
import contact_en from "./resources/languages/en/contact.json";
import presentation_en from "./resources/languages/en/presentation.json";
import projects_en from "./resources/languages/en/projects.json";
import services_en from "./resources/languages/en/services.json";
import footer_en from "./resources/languages/en/footer.json";
import project_details_en from "./resources/languages/en/project_details.json";

import header_es from "./resources/languages/es/header.json";
import about_us_es from "./resources/languages/es/about_us.json";
import blog_es from "./resources/languages/es/blog.json";
import contact_es from "./resources/languages/es/contact.json";
import presentation_es from "./resources/languages/es/presentation.json";
import projects_es from "./resources/languages/es/projects.json";
import services_es from "./resources/languages/es/services.json";
import footer_es from "./resources/languages/es/footer.json";
import project_details_es from "./resources/languages/es/project_details.json";

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import Header from './components/header/index.tsx';
import HomePage from './components/homepage/index.tsx';
import Footer from './components/footer/index.tsx';
import ProjectDetailPage from './components/project_detail/index.tsx';

i18next
  .init({
  interpolation: {escapeValue: false},
  lng: "es",
  resources: {
    en: {
      header: header_en,
      about_us: about_us_en,
      blog: blog_en,
      contact: contact_en,
      presentation: presentation_en,
      projects: projects_en,
      services: services_en,
      footer: footer_en,
      project_details: project_details_en,
    },
    es: {
      header: header_es,
      about_us: about_us_es,
      blog: blog_es,
      contact: contact_es,
      presentation: presentation_es,
      projects: projects_es,
      services: services_es,
      footer: footer_es,
      project_details: project_details_es
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
