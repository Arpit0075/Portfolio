import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <p>
        I am Full Stack Developer who loves designing and building stuffs,really
        excited to begin the journey in IT.
      </p>
      <p>
        I like logic and structure of coding and always strive to write elegant
        and effective code. I like working in front end and back end.
      </p>
      <p className="secondary-p">
        I like using Material UI as front end frame work for the CSS, loves
        working in react. I use NodeJS for the backend and MongoDb for the
        database. I want to keep learning more and more technologies and keep
        improving as a developer. I will be linking some of my works in the
        project section. Apart from coding, I like playing guitar, watching
        series, movies and listening music!
      </p>
      <p className="secondary-p">Download my resume here - </p>

      <div className="skills">
        <h3>These are my Skillset </h3>
        <li>HTML,CSS,JavaScript</li>
        <li>React Js</li>
        <li>MongoDb</li>
        <li>NodeJs</li>
      </div>
    </div>
  );
}

export default About;
