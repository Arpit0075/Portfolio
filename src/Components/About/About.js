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
              href="https://drive.google.com/file/d/1J4wkP5_vjhPFg2wFzzgPCq5uAVxmX-Vz/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download my resume here.
            </a>
          </p>
        </div>
        <div className="skills">
          <h3>These are my Skillset </h3>
          <li>
            HTML, CSS, JavaScript <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={js} alt="js" />
          </li>

          <li>
            React Js <img src={react} alt="css" />
          </li>
          <li>
            MongoDb <img src={mongo} alt="css" />
          </li>
          <li>
            NodeJs <img className="icon" src={node} alt="css" />
          </li>
        </div>
      </div>
    </div>
  );
}

export default About;
