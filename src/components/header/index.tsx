import React from 'react';
import Logo from './logo/index.tsx';
import NavLinks from './nav_links/index.tsx';
import LanguageSelector from './language_selector/index.tsx';
import SideMenuIcon from './side_menu_icon/index.tsx';
import './styles.scss';

const Header: React.FC = () => {

  return (
    <header className="navbar">
      <Logo />
      <div className='navbar-actions-container'>
        <NavLinks/>
        <LanguageSelector/>
        <SideMenuIcon/>
      </div>
    </header>
  );
};

export default Header;