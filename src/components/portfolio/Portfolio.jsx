import React from 'react';
import IMG1 from '../../assets/email.png';
import IMG2 from '../../assets/Expense Tracker.png';
import IMG3 from '../../assets/gym app.png';
import IMG4 from '../../assets/sportify.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'E-Mail Clone',
      img: IMG1,
      description:
        'Created an intuitive userinterface, mimicking the Gmail design and Integrated with an email server and utilized relevant protocols (e.g.SMTP, IMAP) for email sending and retrieval.',
      technologies: 'React | Node JS | Express JS | MongoDB | Material UI',
      link: 'https://clumsy-lime-wetsuit.cyclic.app',
      github: 'https://github.com/sumantP2002/Gmail_clone',
    },
    {
      id: 2,
      title: 'Expense Tracker',
      img: IMG2,
      description:
        'An online platform that keeps track of all your Expenses and helps in Financial Management',
      technologies: 'HTML | CSS | Javascript',
      
      github: 'https://github.com/sumantP2002/Expense-Tracker-',
    },
    {
      id: 3,
      title: 'Gym App',
      img: IMG3,
      description: 'Created a web page for a gym where user can fill the form and join the GYM.',
      technologies: 'HTML | CSS | Javascript',
   
      github: 'https://github.com/sumantP2002/GYM-website',
    },
    {
      id: 4,
      title: 'Spotify',
      img: IMG4,
      description:
        'Created a web application mocking the basic features of Sportify',
      technologies: 'JavaScript | CSS | HTML',
  
      github: 'https://github.com/sumantP2002/Sportify-Clone',
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
