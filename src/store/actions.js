export const ADD_PROJECT = "add project";
export const SET_FILTER = "set filter";
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_GRAPHIQUE: "SHOW_GRAPHIQUE",
  SHOW_LOGOS: "SHOW_LOGOS",
  SHOW_DESIGN: "SHOW_DESIGN",
  SHOW_APPMOBILE: "SHOW_APPMOBILE",
};

export const addProject = (project) => {
  return {
    type: ADD_PROJECT,
    project,
  };
};
export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter,
  };
};
