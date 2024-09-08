import React, { MutableRefObject } from 'react';
import Logo from './logo/index.tsx';
import NavLinks from './nav_links/index.tsx';
import LanguageSelector from './language_selector/index.tsx';
import './styles.scss';

interface HeaderProps {
    aboutUsRef: any;
    servicesRef: any;
    projectsRef: any;
    blogRef: any;
    contactRef: any;
}

const Header: React.FC<HeaderProps> = ({aboutUsRef, servicesRef, projectsRef, blogRef, contactRef}) => {

  return (
    <header className="navbar">
      <Logo />
      <div className='navbar-actions-container'>
        <NavLinks
          aboutUsRef={aboutUsRef}
          servicesRef={servicesRef}
          projectsRef={projectsRef}
          blogRef={blogRef}
          contactRef={contactRef} 
        />
        <LanguageSelector/>
      </div>
    </header>
  );
};

export default Header;