import React from "react";
import "../css/modal.css";

const Modal = ({ project }) => {
  console.log(project.image);
  return (
    <div className="project-modal">
      <div className="image-container">
        <img className="image" src={project.image} alt="background" />
      </div>
      <div className="info-container">
        <div className="title-container">
          <div className="title">{project.title}</div>
          <div className="description">{project.description}</div>
        </div>
        <div className="p-container">
          <p>talking about my app and how super cool it is</p>
        </div>

        <div className="tech-stack"></div>
        <div className="url">{project.url}</div>
      </div>
    </div>
  );
};

export default Modal;
