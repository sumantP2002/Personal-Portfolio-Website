import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/iasdf.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
            
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>DSA Problem Solved</h5>
              <small>1000+</small>
            </article>
            <a className="about__card" href='#portfolio'>
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
            </a>
          </div>
          <p>Hello! I'm a tech enthusiast from Patna, Bihar, specializing in software development and problem-solving. With expertise in data structures, algorithms, HTML/CSS, JavaScript, Node.js, Express.js, MongoDB, and SQL, I've led successful projects showcasing front-end and back-end proficiency. Currently seeking opportunities to contribute my technical skills and innovation to a dynamic team. Let's connect and innovate together! 🚀</p>
          
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro