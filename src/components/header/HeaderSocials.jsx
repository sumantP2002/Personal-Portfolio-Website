import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sumant-kumar-pandey-5a0163229/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/sumantP2002" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/sumant_pandey56/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials