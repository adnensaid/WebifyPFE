import React from "react";
import { FormattedMessage } from "react-intl";
import Style from "../projectsList.module.scss";
const ProjectsItem = ({ project, index }) => {
  const category = project.category.replace(/ /g, "");
  const title = "app.portfolio." + category + ".title" + index;
  const text = "app.portfolio." + category + ".description" + index;
  console.log(text);
  return (
    <li className={Style.projectElem}>
      <div className={Style.cardHeader + " card-header border-0"}>
        <p className="title-secondary mb-4">
          <FormattedMessage id={title} defaultMessage={project.title} />
        </p>
        <p className="paragraph">
          <FormattedMessage id={text} defaultMessage={project.description} />
        </p>
      </div>
      <div className={Style.cardBody + " card-body p-0 "}>
        <img src={project.img} alt={project.title} />
      </div>
    </li>
  );
};
export default ProjectsItem;
