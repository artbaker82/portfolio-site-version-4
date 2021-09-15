import React, { Fragment, useState, useRef, useEffect } from "react";
import Thumbnail from "./Thumbnail";
import { PROJECTS_DATA } from "../projectsData";

import Modal from "./Modal";
const Projects = () => {
  const [projects] = useState(PROJECTS_DATA);
  //used to display modal
  const [projectToDisplay, setProjectToDisplay] = useState(undefined);
  const node = useRef();

  useEffect(() => {
    if (projectToDisplay) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [projectToDisplay]);

  const handleClick = (id) => {
    //set state to change open property/ show modal
    let itemToDisplay = projects.filter((project) => project.id === id)[0];
    setProjectToDisplay(itemToDisplay);
  };

  const handleExit = (e, id) => {
    e.preventDefault();

    setProjectToDisplay(undefined);
  };

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setProjectToDisplay(undefined);
  };

  return (
    <Fragment>
      {projects.map((project) => {
        return (
          <div id={project.id} key={project.id}>
            <Thumbnail project={project} handleClick={handleClick} />
          </div>
        );
      })}

      {projectToDisplay && (
        <div ref={node} className="modalWrapper">
          <Modal project={projectToDisplay} handleExit={handleExit} />
        </div>
      )}
    </Fragment>
  );
};

export default Projects;
