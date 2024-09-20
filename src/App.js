import { useEffect } from 'react';
import './App.css';
import Header from './components/header/index.tsx';
import HomePage from './components/homepage/index.tsx';
import Footer from './components/footer/index.tsx';
import ProjectDetailPage from './components/project_detail/index.tsx';
import AboutUsPage from './components/about_us/index.tsx';
import NotFoundPage from './components/not_found/index.tsx';
import { useTranslation } from "react-i18next";
import { ScrollRestoration, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function App() {
    
  const [t, i18n] = useTranslation("header");

  useEffect(() => {
    document.title = t("header.page_title");
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element:
      <div className="App">
        <Helmet>
          <title>
            {t("header.page_title")}
          </title>
          <meta name="description" content={t("header.page_content")}/>
          <link rel="canonical" href="/"/>
        </Helmet>
        <ScrollRestoration />
        <Header/>
        <HomePage/>
        <Footer 
          companyName='Ashrob Building Company'
          copyrightYear='2024'/>
      </div>,
    },
    {
      path: "/projects/:id",
      element: <div className="App">
        <Helmet>
          <title>
            {t("header.page_title")}
          </title>
          <meta name="description" content={t("header.page_content")}/>
          <link rel="canonical" href="/projects/:id"/>
        </Helmet>
        <ScrollRestoration />
        <Header/>
        <ProjectDetailPage/>
        <Footer 
          companyName='Ashrob Building Company'
          copyrightYear='2024'/>
      </div>,
    },
    {
      path: "/about-us",
      element: <div className="App">
        <Helmet>
          <title>
            {t("header.page_title")}
          </title>
          <meta name="description" content={t("header.page_content")}/>
          <link rel="canonical" href="/about-us"/>
        </Helmet>
        <ScrollRestoration />
        <Header/>
        <AboutUsPage/>
        <Footer 
          companyName='Ashrob Building Company'
          copyrightYear='2024'/>
      </div>,
    },
    {
      path: "*",
      element: <div className="App">
        <Helmet>
          <title>
            {t("header.page_title")}
          </title>
          <meta name="description" content={t("header.page_content")}/>
          <link rel="canonical" href="/about-us"/>
        </Helmet>
        <ScrollRestoration />
        <Header/>
        <NotFoundPage/>
        <Footer 
          companyName='Ashrob Building Company'
          copyrightYear='2024'/>
      </div>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
