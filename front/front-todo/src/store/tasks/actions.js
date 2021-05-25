import { FETCH_TASKS, ADD_TASK, DELETE_TASK } from "./actionTypes";
import { getTasks, createTask, removeTask } from "../../services/tasks";

export const setTasksList = () => async (dispatch, getState) => {
  const response = await getTasks("Bearer " + getState().user.token);
  dispatch({ type: FETCH_TASKS, payload: response.tasks });
};

export const addTask = (task) => async (dispatch, getState) => {
  await createTask(task, "Bearer " + getState().user.token);
  dispatch({ type: ADD_TASK });
};

export const deleteTask = (id) => async (dispatch) => {
  await removeTask(task, "Bearer " + getState().user.token);
  dispatch({ type: DELETE_TASK, payload: id });
};
