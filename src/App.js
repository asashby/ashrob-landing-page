import { useRef } from 'react';
import './App.css';
import Header from './components/header/index.tsx';
import HomePage from './components/homepage/index.tsx';
import Footer from './components/footer/index.tsx';

function App() {
  
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Header
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
        blogRef={blogRef}
        contactRef={contactRef}/>
      <HomePage 
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        projectsRef={projectsRef}
        blogRef={blogRef}
        contactRef={contactRef}
      />
      <Footer 
        companyName='Ashrob Building Company'
        copyrightYear='2024'/>
    </div>
  );
}

export default App;
