import { useEffect } from 'react';
import './App.css';
import Header from './components/header/index.tsx';
import HomePage from './components/homepage/index.tsx';
import Footer from './components/footer/index.tsx';
import ProjectDetailPage from './components/project_detail/index.tsx';
import { useTranslation } from "react-i18next";
import { ScrollRestoration, RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
    
  const [t, i18n] = useTranslation("header");

  useEffect(() => {
    document.title = t("header.page_title");
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className="App">
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
        <ScrollRestoration />
        <Header/>
        <ProjectDetailPage/>
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
