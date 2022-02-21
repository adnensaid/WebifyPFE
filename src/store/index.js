import { combineReducers, createStore } from "redux";
import * as reducers from "./reducers";

const AppReducer = combineReducers(reducers);
const store = createStore(AppReducer);
export default store;
