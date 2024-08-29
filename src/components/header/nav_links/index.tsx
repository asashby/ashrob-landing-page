import React from 'react';
import './styles.scss';

const NavLinks: React.FC = () => {
  const links = ['Services', 'About Us', 'Projects', 'Blog', 'Contact'];

  return (
    <nav className="nav-links">
      {links.map((link) => (
        <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="nav-link">
          {link}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;