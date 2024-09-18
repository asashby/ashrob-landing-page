import React, { useState } from 'react';
import Logo from './logo/index.tsx';
import NavLinks from './nav_links/index.tsx';
import LanguageSelector from './language_selector/index.tsx';
import SideMenuIcon from './side_menu_icon/index.tsx';
import './styles.scss';

const Header: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <header className="navbar">
      <div className="icons-container">
        <Logo />
        <div className='navbar-actions-container mobile'>
          <SideMenuIcon onPressed={toggleMenu}/>
        </div>
      </div>
      <div className={`${isOpen ? "is-open" : "navbar-actions-container desktop"}`}>
        <NavLinks onPressed={toggleMenu}/>
        <LanguageSelector onPressed={toggleMenu}/>
      </div>
    </header>
  );
};

export default Header;