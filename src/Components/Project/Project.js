import React, { useState } from "react";
import "./Project.css";
import leftIcon from "../../Images/left-icon.png";
import rightIcon from "../../Images/right-icon.png";
import googleDrive from "../../Images/google-drive.png";
import GOT from "../../Images/GOT.png";
import task from "../../Images/task.png";
import ecommerce from "../../Images/ecommerce.png";
import chatApp from "../../Images/chatApp.png";

function Project() {
  //state for the i variable
  const [i, setI] = useState(0);

  //state for image transform
  const [state, setstate] = useState("1");

  const projects = [
    {
      title: "Google-Drive-Clone",
      description:
        "Used Google firebase for authentication, storage and database",
      links: [
        "https://github.com/Arpit0075/google-drive-clone",
        "https://drive-clone-a509e.web.app",
      ],
      imgSrc: googleDrive,
    },
    {
      title: "E-commerce Application",
      description: "MERN App with Razorpay payment integration",
      links: [
        "https://github.com/Arpit0075/ecommerce",
        "https://ecommerce918.netlify.app",
      ],
      imgSrc: ecommerce,
    },
    {
      title: "Group Chat Application",
      description: "MERN App with Socket.io",
      links: [
        "https://github.com/Arpit0075/chatApp",
        "https://chatapp978.netlify.app",
      ],
      imgSrc: chatApp,
    },
    {
      title: "Task Portal",
      description: "Student task submission portal, MERN App",
      links: [
        "https://github.com/Arpit0075/StudentTasks",
        "https://student-task1.netlify.app/",
      ],
      imgSrc: task,
    },
    {
      title: "Game of Thrones App",
      description: "Search filter app for GOT Characters using HTML,CSS ,JS",
      links: [
        "https://github.com/Arpit0075/Mini-Projects/tree/main/GOT",
        "https://got-1.netlify.app/",
      ],
      imgSrc: GOT,
    },
  ];

  return (
    <div className="project" id="project">
      <div className="project-container">
        <div className="project-left">
          <h3>Project Detail </h3>
          <p>Title : {projects[i].title}</p>
          <p>Description : {projects[i].description}</p>
          <p>
            Link :
            <a href={projects[i].links[0]} target="_blank" rel="noreferrer">
              {projects[i].links[0]}
            </a>
          </p>
        </div>
        <div className="project-right">
          <a href={projects[i].links[1]} target="_blank" rel="noreferrer">
            <img
              style={{ opacity: state }}
              src={projects[i].imgSrc}
              alt="projectDemo"
            />
          </a>
        </div>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            if (i === 0) {
              setI(projects.length - 1);
              setstate("0");
              setTimeout(() => {
                setstate("1");
              }, 700);
            } else setI(i - 1);
            setstate("0");
            setTimeout(() => {
              setstate("1");
            }, 700);
          }}
        >
          <img src={leftIcon} alt="left" />
        </button>
        <button
          onClick={() => {
            if (i === projects.length - 1) {
              setI(0);
              setstate("0");
              setTimeout(() => {
                setstate("1");
              }, 700);
            } else setI(i + 1);
            setstate("0");
            setTimeout(() => {
              setstate("1");
            }, 700);
          }}
        >
          <img src={rightIcon} alt="right" />
        </button>
      </div>
    </div>
  );
}

export default Project;
