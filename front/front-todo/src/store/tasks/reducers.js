import { createReducer } from "@reduxjs/toolkit";
import { FETCH_TASKS, ADD_TASK, DELETE_TASK } from "./actionTypes";

const initialState = {
  tasksList: [],
};

const tasksReducer = createReducer(initialState, {
  [FETCH_TASKS]: (state, action) => ({ ...state, tasksList: action.payload }),
  [ADD_TASK]: (state, action) => ({ ...state }),
  [DELETE_TASK]: (state, action) => ({ ...state, tasksList: action.payload }),
});

export default tasksReducer;
