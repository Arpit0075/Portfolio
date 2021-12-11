import React from "react";
import "./About.css";
import html from "../../Images/html.svg";
import css from "../../Images/css.png";
import js from "../../Images/js.svg";
import react from "../../Images/react.svg";
import mongo from "../../Images/mongo.png";
import node from "../../Images/node.svg";

function About() {
  return (
    <div className="about" id="about">
      <h1 className="about-heading">About Me</h1>
      <div className="about-container">
        <div className="about-top">
          <p>
            I am Full Stack Developer who loves designing and building
            stuffs,really excited to begin the journey in IT. I like logic and
            structure of coding and always strive to write elegant and effective
            code
          </p>

          <p className="secondary-p">
            <a
              href="https://drive.google.com/file/d/1SifqZ7s6QO4gcV49PhE6RlIUS1c7-nXX/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download my resume here.
            </a>
          </p>
        </div>
        <div className="skills">
          <h3>These are my Skillset </h3>
          <li className="skill-sets">
            HTML, CSS, JavaScript{" "}
            <img className="skills-icon" src={html} alt="html" />
            <img className="skills-icon" src={css} alt="css" />
            <img className="skills-icon" src={js} alt="js" />
          </li>

          <li className="skill-sets">
            React Js <img className="skills-icon" src={react} alt="css" />
          </li>
          <li className="skill-sets">
            MongoDb <img className="skills-icon" src={mongo} alt="css" />
          </li>
          <li className="skill-sets">
            NodeJs <img className="skills-icon" src={node} alt="css" />
          </li>
        </div>
      </div>
    </div>
  );
}

export default About;
