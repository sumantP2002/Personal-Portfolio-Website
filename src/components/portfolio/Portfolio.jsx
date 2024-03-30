import React from 'react';
import img1 from '../../assets/img8.png'
import IMG1 from '../../assets/email.png';
import IMG2 from '../../assets/Expense Tracker.png';
import IMG3 from '../../assets/gym app.png';
import IMG4 from '../../assets/sportify.png';
import img6 from '../../assets/img6.png'
import Thai from '../../assets/Thai.png'
import Expense from '../../assets/Expence.png'
import Connect from '../../assets/Connect.png'

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Multi-Vendor E-Commerce Website',
      img: img1,
      description:
        'Developed a comprehensive web application that facilitates inventory management and online order processing. Implemented Authentication and Role based Authorization. Used Redux for overall State Management. ',
      technologies: 'TailwindCSS | Javascript | React | Node JS | Express JS | MongoDB',
      link: 'https://apna-market-front.vercel.app/',
      github: 'https://github.com/sumantP2002/ApnaMarket',
    },
    {
      id: 2,
      title: "Connect-Let's talk [Ongoing project] ",
      img: Connect,
      description:
        'Developing Connect, a Complete chat app using MERN stack. Allows easy sign-up, private/group chats, broadcast messages, and theme customization. Continuously enhancing features for an improved user experience.',
      technologies: 'HTML/CSS | Javascript | React | MaterialUI | Motion | Node JS | Express JS | MongoDB | Socket.io',
      link: '',
      github: '',
    },
    {
      id: 3,
      title: 'FinFolio',
      img: Expense,
      description:
        'I developed a MERN stack expense management website where users can easily add and track their income and expenses. The site features a user-friendly interface and utilizes MongoDB for efficient data management.',
      technologies: 'Context | React | Node JS | Express JS | MongoDB',
      link: '',
      github: 'https://github.com/sumantP2002/FinFolio/tree/master',
    },
    {
      id: 4,
      title: 'E-Letter',
      img: IMG1,
      description:
        'Created an intuitive userinterface, mimicking the Gmail design and Integrated with an email server and utilized relevant protocols (e.g.SMTP, IMAP) for email sending and retrieval.',
      technologies: 'React | Node JS | Express JS | MongoDB | Material UI',
      link: 'https://fair-cyan-rabbit-hat.cyclic.app/',
      github: 'https://github.com/sumantP2002/GmailClone',
    },
    {
      id: 5,
      title: 'Thailand ID-Card OCR App',
      img: Thai,
      description:"I created a project for QOALA that allows users to upload their Thailand ID cards. It extracts the data using OCR, displays it, and stores it in the database. Deletion is possible based on the ID number.",
      technologies: 'React | Node JS | Express JS | MongoDB | Google  Vision  API',
      link: 'https://thaiid-info.onrender.com/',
      github: 'https://github.com/sumantP2002/Id-Data-Extract',
    },
    
    
    {
      id: 6,
      title: 'Expense Tracker',
      img: IMG2,
      description:
        'An online platform that keeps track of all your Expenses and helps in Financial Management',
      technologies: 'HTML | CSS | Javascript',
      
      github: 'https://github.com/sumantP2002/Expense-Tracker-',
    },
    {
      id: 7,
      title: 'Gym App',
      img: IMG3,
      description: 'Created a web page for a gym where user can fill the form and join the GYM.',
      technologies: 'HTML | CSS | Javascript',
   
      github: 'https://github.com/sumantP2002/GYM-website',
    },
    {
      id: 8,
      title: 'Spotify',
      img: IMG4,
      description:
        'Created a web application mocking the basic features of Sportify',
      technologies: 'JavaScript | CSS | HTML',
  
      github: 'https://github.com/sumantP2002/Sportify-Clone',
    },
    {
      id: 9,
      title: 'Personal Portfolio',
      img: img6,
      description:
        'This project is to demonstrate the skills i have together with project and achieveme. It is frontend project based on React.',
      technologies: 'React | JavaScript | CSS | HTML',
      link: 'https://clumsy-lime-wetsuit.cyclic.app',
      github: 'https://sumantpandey.netlify.app/',
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
