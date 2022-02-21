import * as actionsList from "./actions";
import initialState from "../data";
export const projects = (state = initialState, action) => {
  switch (action.type) {
    case actionsList.ADD_PROJECT:
      return [...state.projects, action.project];
    default:
      return state;
  }
};

export const filter = (
  state = actionsList.VisibilityFilters.SHOW_ALL,
  action
) => {
  switch (action.type) {
    case actionsList.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};
