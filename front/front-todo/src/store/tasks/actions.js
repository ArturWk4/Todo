import {
  FETCH_TASKS,
  ADD_TASK,
  DELETE_TASK,
  CLEAR_TASK_LIST,
} from "./actionTypes";
import { getTasks, createTask, removeTask } from "../../services/tasks";

export const setTasksList = () => async (dispatch, getState) => {
  const response = await getTasks(
    "Bearer " + getState().user.currentUser.data.token
  );
  dispatch({ type: FETCH_TASKS, payload: response.data.tasks });
};

export const addTask = (task) => async (dispatch, getState) => {
  await createTask(task, "Bearer " + getState().user.currentUser.data.token);
  dispatch({ type: ADD_TASK });
};

export const deleteTask = (id) => async (dispatch, getState) => {
  await removeTask(id, "Bearer " + getState().user.currentUser.data.token);
  dispatch({ type: DELETE_TASK, payload: id });
};

export const clearTaskList = (dispatch, getState) => {
  dispatch({ type: CLEAR_TASK_LIST });
};
