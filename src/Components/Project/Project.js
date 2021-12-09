import React, { useState } from "react";
import "./Project.css";
import leftIcon from "../../Images/left-icon.png";
import rightIcon from "../../Images/right-icon.png";
import googleDrive from "../../Images/google-drive.png";
import GOT from "../../Images/GOT.png";
import task from "../../Images/task.png";
import ecommerce from "../../Images/ecommerce.png";
import chat from "../../Images/chat.png";
import aws from "../../Images/aws.png";

function Project() {
  //state for the i variable
  const [i, setI] = useState(0);

  //state for image transform
  const [state, setstate] = useState("1");

  const projects = [
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
      imgSrc: chat,
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
      title: "AWS-CRUD App",
      description:
        "Full stack application using DynamoDb, API Gateway and Lambda function",
      links: [
        "https://github.com/Arpit0075/AWS-usersApi",
        "https://main.d39jd3p9en6gka.amplifyapp.com/",
      ],
      imgSrc: aws,
    },
    {
      title: "Google-Drive-Clone",
      description:
        "Used Google firebase for authentication, storage and database,its full stack application",
      links: [
        "https://github.com/Arpit0075/google-drive-clone",
        "https://drive-clone-a509e.web.app",
      ],
      imgSrc: googleDrive,
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
            Github Link:
            <a href={projects[i].links[0]} target="_blank" rel="noreferrer">
              {projects[i].links[0]}
            </a>
          </p>
          <p>
            Url Link:
            <a href={projects[i].links[1]} target="_blank" rel="noreferrer">
              {projects[i].links[1]}
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

          {/* buttons */}
          <button
            className="prevBtn"
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
            className="nextBtn"
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
    </div>
  );
}

export default Project;
