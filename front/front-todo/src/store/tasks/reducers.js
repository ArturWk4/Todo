import { createReducer } from "@reduxjs/toolkit";
import {
  FETCH_TASKS,
  ADD_TASK,
  DELETE_TASK,
  CLEAR_TASK_LIST,
} from "./actionTypes";

const initialState = {
  tasksList: [],
};

const tasksReducer = createReducer(initialState, {
  [FETCH_TASKS]: (state, action) => ({ ...state, tasksList: action.payload }),
  [CLEAR_TASK_LIST]: (state, action) => ({ ...state, tasksList: [] }),
  [ADD_TASK]: (state, action) => ({ ...state }),
  [DELETE_TASK]: (state, action) => ({ ...state }),
});

export default tasksReducer;
