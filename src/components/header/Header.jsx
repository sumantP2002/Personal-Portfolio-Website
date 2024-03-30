import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sumant Kumar Pandey</h1>
        <h5 className="text-light">Open To Work | Freelancer</h5>
        <h5 className="text-light">Full-Stack Web Developer | Final Year Student</h5>
        <CTA />
        
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
