import { FETCH_TASKS, ADD_TASK, DELETE_TASK } from "./actionTypes";
import { getTasks, createTask } from "../../services/tasks";

const setTasksList = () => async (dispatch, getState) => {
  const response = await getTasks("Bearer " + getState().user.token);
  dispatch({ type: FETCH_TASKS, payload: response.tasks });
};

const addTask = (task) => async (dispatch, getState) => {
  await createTask(task, "Bearer " + getState().user.token);
  dispatch({ type: ADD_TASK });
};
