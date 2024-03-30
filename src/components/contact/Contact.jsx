import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';


const Contact = () => {
  const [name , setName] = useState("");
  const [mail , setMail] = useState("");
  const [mes , setMes] = useState("");
// ----------
  // const nodemailer = require("nodemailer");
  

  // const sendMail = async (message) => {
  //   const transporter = nodemailer.createTransport({
  //     host: SMPT_HOST,
  //     port: SMPT_PORT,
  //     service: process.env.SMPT_SERVICE,
  //     auth:{
  //         user: SMPT_MAIL,
  //         pass: SMPT_PASSWORD,
  //     },
  //   });

  //   const mailOptions = {
  //     from: SMPT_MAIL,
  //     to: message.email,
  //     subject: message.subject,
  //     text: message.message,
  //   };

  //   await transporter.sendMail(mailOptions);
   
  // };


  const handleSubmit = (e) => {
    return;
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sumanttpc@gmail.com</h5>
            <a href="mailto:sumanttpc@gmail.com">Send a message</a>
          </article>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            required
          />
          <input
            type='mail'
            placeholder="Your Email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
