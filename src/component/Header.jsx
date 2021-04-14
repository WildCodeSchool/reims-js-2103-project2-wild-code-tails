import React from 'react';
import './NavBar/NavBar.css';
import headerLogo from './pics/headerLogo.jpg';

const Header = () => (
  <header className="header">
    <div className="codeTailsImg"><img src={headerLogo} alt="" /></div>
    <h1>Wild Code&apos;Tails</h1>
  </header>
);

export default Header;
