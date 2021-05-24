import { combineReducers } from "redux";
import tasksReducer from "./tasks/reducers";

export default combineReducers({
  tasks: tasksReducer,
});
