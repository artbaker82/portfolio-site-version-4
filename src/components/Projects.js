import React, { Component, Fragment } from "react";
import Thumbnail from "./Thumbnail";
import { PROJECTS_DATA } from "../projectsData";

import Modal from "./Modal";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS_DATA,
      projectToDisplay: undefined,
    };
  }

  handleClick = (id) => {
    //set state to change open property/ show modal
    let itemToChange = this.state.projects.filter((project) => project.id === id)[0];
    itemToChange.open = !itemToChange.open;
    console.log(id, itemToChange);
    this.setState({
      ...this.state.projects,
      itemToChange,
    });
    this.setState({
      //set projectToDisplay only if property open is true
      projectToDisplay: itemToChange.open ? itemToChange : undefined,
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.projects.map((project) => {
          return (
            <div id={project.id} key={project.id}>
              <Thumbnail project={project} handleClick={this.handleClick} />
            </div>
          );
        })}

        {this.state.projectToDisplay && (
          <div>
            <Modal project={this.state.projectToDisplay} />
          </div>
        )}
      </Fragment>
    );
  }
}

export default Projects;
