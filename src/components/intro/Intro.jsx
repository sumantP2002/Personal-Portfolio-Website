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
              <small>900+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
            </article>
          </div>
          <p>Hello there! Thank you for visiting my Website. I'm an aspiring software professional with a background in engineering. I have a particular interest in software development and problem-solving. Furthermore, I found myself drawn to front-end technologies such as HTML, CSS, and JavaScript, as well as back-end technologies like Node.js, Express.js, MongoDB, and SQL.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro