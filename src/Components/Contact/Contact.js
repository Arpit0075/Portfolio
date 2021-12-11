import React from "react";
import "./Contact.css";
import gmail from "../../Images/gmail.svg";
import github from "../../Images/github.svg";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1 className="contact-heading">Get in touch</h1>
      <div className="contact-container">
        <p>
          Its best to reach me on my email or you can reach me on my socials.
        </p>
        <p className="contact-me">
          My email address
          <img src={gmail} className="contact-icon" alt="gmail" />
          arpitworks4@gmail.com
        </p>
        <p className="contact-me">
          My Github
          <a
            href="https://github.com/Arpit0075"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} className="contact-icon" alt="github" />
          </a>
          www.github.com/Arpit0075
        </p>
        <p className="secondary-p">
          I am open to collaborate on projects. Thanks for checking my webpage,
          have a great one!!
        </p>
      </div>
    </div>
  );
}

export default Contact;
