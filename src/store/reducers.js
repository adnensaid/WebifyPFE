import * as actionsList from "./actions";
import initialState from "../data";
export const projects = (state = initialState.projects, action) => {
  switch (action.type) {
    case actionsList.ADD_PROJECT:
      return [...state.projects, action.project];
    default:
      return state;
  }
};

export const newsletters = (
  state = { newsletters: initialState.newsletters },
  action
) => {
  switch (action.type) {
    case actionsList.ADD_NEWSLETTER: {
      return { newsletters: [...state.newsletters, action.email] };
    }
    default:
      return state;
  }
};

export const expertises = (state = initialState.expertises, action) => {
  return state;
};

export const services = (state = initialState.services, action) => {
  return state;
};
export const testimonials = (state = initialState.testimonials, action) => {
  return state;
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
