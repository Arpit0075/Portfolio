import React, { useState } from "react";
import "./Intro.css";
import img from "../../Images/img.jpg";
import openIcon from "../../Images/open-icon.svg";
import closeIcon from "../../Images/close-icon.svg";

function Intro() {
  //state for opacity of hamburger icons
  const [opacity, setOpacity] = useState({
    open: "1",
    close: "0",
  });

  //state for the menu link postion
  const [menuPos, setMenuPos] = useState("-600px");

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={img} alt="background" />
        </div>
      </div>
      <div className="right">
        <div className="rightContainer">
          <h1>I am Arpit Ebenezar Lal</h1>
          <p>Full Stack Developer</p>
        </div>
        <div className="hamburger">
          <img src={closeIcon} alt="close" style={{ opacity: opacity.close }} />

          <img
            src={openIcon}
            alt="open"
            style={{ opacity: opacity.open }}
            onClick={() =>
              setTimeout(() => {
                setOpacity(
                  opacity.open === "1"
                    ? { ...opacity, open: "0", close: "1" }
                    : { ...opacity, close: "0", open: "1" }
                );

                setMenuPos(menuPos === "-600px" ? "0px" : "-600px");
              }, 100)
            }
          />
        </div>

        <div
          className="menu"
          style={{ right: menuPos }}
          //style={{ right: "0px" }}
        >
          <ul>
            <li>
              <a
                href="#intro"
                onClick={() =>
                  setTimeout(() => {
                    setOpacity(
                      opacity.open === "1"
                        ? { ...opacity, open: "0", close: "1" }
                        : { ...opacity, close: "0", open: "1" }
                    );

                    setMenuPos("-600px");
                  }, 100)
                }
              >
                Intro
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() =>
                  setTimeout(() => {
                    setOpacity(
                      opacity.open === "1"
                        ? { ...opacity, open: "0", close: "1" }
                        : { ...opacity, close: "0", open: "1" }
                    );

                    setMenuPos("-600px");
                  }, 100)
                }
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={() =>
                  setTimeout(() => {
                    setOpacity(
                      opacity.open === "1"
                        ? { ...opacity, open: "0", close: "1" }
                        : { ...opacity, close: "0", open: "1" }
                    );

                    setMenuPos("-600px");
                  }, 100)
                }
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() =>
                  setTimeout(() => {
                    setOpacity(
                      opacity.open === "1"
                        ? { ...opacity, open: "0", close: "1" }
                        : { ...opacity, close: "0", open: "1" }
                    );

                    setMenuPos("-600px");
                  }, 100)
                }
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Intro;
