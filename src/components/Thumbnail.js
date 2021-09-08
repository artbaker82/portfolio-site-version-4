import React, { Fragment } from "react";
import "../css/thumbnail.css";
const Thumbnail = ({ project, handleClick }) => {
  //return thumbnail, onclick load modal
  console.log(project.title, project.id);
  return (
    <Fragment>
      <div onClick={() => handleClick(project.id)} className="thumbnail-wrapper">
        <div className="thumbnail-header">{project.title}</div>
        <div className="thumbnail-body">{project.description}</div>
        <div className="thumbnail-link">{project.url}</div>
      </div>
    </Fragment>
  );
};

export default Thumbnail;
