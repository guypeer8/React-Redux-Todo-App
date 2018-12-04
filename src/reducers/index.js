import { combineReducers } from "redux";
import todoInput from "./todoInput";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  todoInput,
  todos,
  visibilityFilter
});
