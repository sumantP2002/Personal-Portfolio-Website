import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { FaReact } from "react-icons/fa";
import { BiMessageSquareDetail } from 'react-icons/bi';
import { FaLaptopCode } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";


import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#coding" onClick={()=> setActiveNav('#coding')} className={activeNav === '#coding' ? 'active' : ''}><FaLaptopCode /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaReact /></a>
      <a href="#certificate" onClick={()=> setActiveNav('#certificate')} className={activeNav === '#certificate' ? 'active' : ''}><TbCertificate /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Topbar;