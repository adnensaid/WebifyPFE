import React from "react";
import Project from "../project/Project";
import Style from "../projects.module.scss";
const ProjectsList = (props) => {
  let projectsList = [];
  props.projects
    .filter(
      ({ category }) =>
        props.displayCategory === category || props.displayCategory === "TOUS"
    )
    .map((project) => projectsList.push(project));
  let content = "";
  if (props.displayCategory === "TOUS") {
    content = (
      <ul className={Style.projectsList}>
        {projectsList.map((project, index) =>
          index < 9 ? (
            <Project key={`ProductItems-${project.title}`} project={project} />
          ) : null
        )}
      </ul>
    );
  } else if (
    props.displayCategory === "LOGOS" ||
    props.displayCategory === "APPLICATIONS MOBILES"
  ) {
    content = (
      <ul className={Style.projectsListLogo}>
        {projectsList.map((project) => (
          <Project key={`ProductItems-${project.title}`} project={project} />
        ))}
      </ul>
    );
  } else if (props.displayCategory === "DESIGN WEB") {
    content = (
      <ul className={Style.projectsListDesign}>
        {projectsList.map((project) => (
          <Project key={`ProductItems-${project.title}`} project={project} />
        ))}
      </ul>
    );
  } else if (props.displayCategory === "GRAPHIQUE") {
    content = (
      <ul className={Style.projectsListLogo}>
        {projectsList.map((project, index) =>
          index > 9 ? (
            <Project key={`ProductItems-${project.title}`} project={project} />
          ) : null
        )}
      </ul>
    );
  }
  return <>{content}</>;
};
export default ProjectsList;
