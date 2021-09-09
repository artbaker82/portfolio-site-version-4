import React, { Fragment, useState } from "react";
import "../css/thumbnail.css";
const Thumbnail = ({ project, handleClick }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  //return thumbnail, onclick load modal
  console.log(project.title, project.id);

  return (
    <Fragment>
      <div
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        className="thumbnail-wrapper"
      >
        <div className={`thumbnail-image-container ${mouseEnter ? "image-zoom" : ""}   `}>
          <img src={project.image} alt="" />
        </div>
        <div className="thumbnail-header" onClick={() => handleClick(project.id)}>
          {project.title}
        </div>
      </div>
    </Fragment>
  );
};

export default Thumbnail;
