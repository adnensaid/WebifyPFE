import { connect } from "react-redux";
import React from "react";
import ProjectsItem from "./ProjectsItem/ProjectsItem";
import { VisibilityFilters } from "../../../../../store/actions";
import Style from "./projectsList.module.scss";
const ProjectsList = (props) => {
  const filter = props.state.filter;
  switch (filter) {
    case VisibilityFilters.SHOW_APPMOBILE: {
      return (
        <ul className={Style.appMobile}>
          {props.projects &&
            props.projects
              .slice(0, 9)
              .map((p) => <ProjectsItem key={p.title} project={p} />)}
        </ul>
      );
    }
    case VisibilityFilters.SHOW_GRAPHIQUE: {
      return (
        <ul className={Style.appGraphique}>
          {props.projects &&
            props.projects
              .slice(0, 9)
              .map((p) => <ProjectsItem key={p.title} project={p} />)}
        </ul>
      );
    }
    case VisibilityFilters.SHOW_LOGOS: {
      return (
        <ul className={Style.appLogos}>
          {props.projects &&
            props.projects
              .slice(0, 9)
              .map((p) => <ProjectsItem key={p.title} project={p} />)}
        </ul>
      );
    }
    case VisibilityFilters.SHOW_DESIGN: {
      return (
        <ul className={Style.appDesign}>
          {props.projects &&
            props.projects
              .slice(0, 9)
              .map((p) => <ProjectsItem key={p.title} project={p} />)}
        </ul>
      );
    }
    default:
      return (
        <ul className={Style.tous}>
          {props.projects &&
            props.projects
              .slice(0, 9)
              .map((p) => <ProjectsItem key={p.title} project={p} />)}
        </ul>
      );
  }
};
export default connect((state) => {
  const filter = state.filter;
  let projects;
  switch (filter) {
    case VisibilityFilters.SHOW_APPMOBILE: {
      projects = state.projects.filter(
        (p) => p.category === "APPLICATIONS MOBILES"
      );

      break;
    }
    case VisibilityFilters.SHOW_DESIGN: {
      projects = state.projects.filter((p) => p.category === "DESIGN WEB");
      break;
    }
    case VisibilityFilters.SHOW_GRAPHIQUE: {
      projects = state.projects.filter((p) => p.category === "GRAPHIQUE");
      break;
    }
    case VisibilityFilters.SHOW_LOGOS: {
      projects = state.projects.filter((p) => p.category === "LOGOS");
      break;
    }
    default: {
      projects = state.projects;
      break;
    }
  }
  return { projects, state };
})(ProjectsList);
