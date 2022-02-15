import React, { Component } from "react";
import ButtonCategories from "../buttoncategories/ButtonCategories";
import ProjectList from "./ProjectsList/ProjectsList";
import Style from "./projects.module.scss";

export default class Projects extends Component {
  render() {
    let projects = this.props.state.projects;
    const setCategory = this.props.setCategory;
    const displayCategory = this.props.state.displayCategory;
    return (
      <div className={Style.projects}>
        <div className="container-small">
          <p className="title-section">NOTRE PORTFOLIO</p>
          <h2 className="text-center">NOS DERNIER RÉALISATIONS</h2>
          <div className={Style.projectsContent}>
            <ButtonCategories projects={projects} setCategory={setCategory} />
            <ProjectList
              projects={projects}
              displayCategory={displayCategory}
            />
          </div>
        </div>
      </div>
    );
  }
}
