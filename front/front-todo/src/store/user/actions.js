import { LOGIN, LOGOUT } from "./actionTypes";
import { authenticateRequest } from "../../services/users";

export const login = (username, password) => async (dispatch, getState) => {
  const response = await authenticateRequest(username, password);
  dispatch({ type: LOGIN, payload: response });
};

export const logout = () => (dispatch, getState) => {
  dispatch({ type: LOGOUT });
};
