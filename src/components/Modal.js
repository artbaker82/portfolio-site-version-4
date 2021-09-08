import React, { Fragment } from "react";
import "../css/modal.css";

const Modal = ({ project }) => {
  console.log(project.image);
  return (
    <div className="project-modal">
      <img className="image" src={project.image} alt="background" />

      <div className="title">{project.title}</div>
      <div className="description">{project.description}</div>
      <div className="url">{project.url}</div>
    </div>
  );
};

export default Modal;
