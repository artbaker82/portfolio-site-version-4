import React, { useState } from "react";
import "../css/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Projects from "./Projects";

const Modal = ({ project, handleExit }) => {
  const [showExitBtn, setShowExitBtn] = useState(false);
  console.log(showExitBtn);
  console.log(project.image);
  return (
    <div className="project-modal">
      <div
        className="image-container"
        onMouseEnter={() => setShowExitBtn(!showExitBtn)}
        onMouseLeave={() => setShowExitBtn(!showExitBtn)}
      >
        <img className="image" src={project.image} alt="background" />
      </div>
      <div className="info-container">
        <div className="title-container">
          <div className="title">{project.title}</div>
          <div className="description">
            <div className="info">{project.subTitle}</div>

            <div className="link-container">
              {project.links.map((link, idx) => {
                console.log(idx);
                if (idx === 0) {
                  return (
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name} <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                  );
                }
                return <a href={link.url}>{link.name}</a>;
              })}
            </div>
          </div>
        </div>
        <div className="p-container">
          <p>{project.description}</p>
        </div>

        <div className="tech-stack">
          <div className="sub-header">What I used</div>
          <div className="stack-icon-container">
            {project.icons.map((icon) => {
              console.log(icon);
              return <FontAwesomeIcon icon={["fab", icon]} />;
            })}
          </div>
        </div>

        <FontAwesomeIcon
          icon={faTimes}
          className={`exitBtn ${showExitBtn ? "show" : ""}`}
          onClick={(e) => handleExit(e)}
        />
      </div>
    </div>
  );
};

export default Modal;
