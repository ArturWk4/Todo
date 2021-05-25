import { combineReducers } from "redux";
import tasksReducer from "./tasks/reducers";
import userReducer from "./user/reducers";

export default combineReducers({
  tasks: tasksReducer,
  user: userReducer,
});
