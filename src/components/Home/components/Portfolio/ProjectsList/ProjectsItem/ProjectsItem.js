import React from "react";
import Style from "../projectsList.module.scss";
const ProjectsItem = ({ project }) => {
  return (
    <li className={Style.projectElem}>
      <div className={Style.cardHeader + " card-header border-0"}>
        <p className="title-secondary mb-4">{project.title}</p>
        <p className="paragraph">{project.description}</p>
      </div>
      <div className={Style.cardBody + " card-body p-0"}>
        <img src={project.img} alt={project.title} />
      </div>
    </li>
  );
};
export default ProjectsItem;
