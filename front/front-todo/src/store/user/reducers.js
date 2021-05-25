import { createReducer } from "@reduxjs/toolkit";
import { getCurrentUser } from "../../services/users";
import { LOGIN, LOGOUT } from "./actionTypes";

const initialState = {
  currentUser: getCurrentUser(),
};

const userReducer = createReducer(initialState, {
  [LOGIN]: (state, action) => ({ ...state, currentUser: action.payload }),
  [LOGOUT]: (state) => ({ ...state, currentUser: {} }),
});

export default userReducer;
