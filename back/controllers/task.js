const HttpStatusCode = require("http-status-codes");
const taskService = require("../services/task");
const { isCreateTaskPayloadValid } = require("../utils/validation");

const createTaskController = async (req, res) => {
  const { body } = req;
  try {
    if (!isCreateTaskPayloadValid(body)) {
      return res.status(HttpStatusCode.BAD_REQUEST).json({
        message: "Required payload is not provided",
      });
    }
    const { title, userId, priorityId } = body;
    await taskService.createTask({ title, userId, priorityId });
    return res.status(HttpStatusCode.CREATED).end();
  } catch (e) {
    console.log(e);
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
  }
};

const getUsersTasksController = async (req, res) => {
  const { userId } = req.body;
  try {
    if (!userId) {
      return res.status(HttpStatusCode.BAD_REQUEST).end();
    }
    const tasks = await taskService.getTasksWhere({ userId });
    return res.status(HttpStatusCode.OK).json({ tasks });
  } catch (e) {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
  }
};

const setTaskCompletedController = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    if (completed == undefined) {
      return res.status(HttpStatusCode.BAD_REQUEST).end();
    }
    await taskService.changeTaskStatus(id, completed);
    const updatedTask = (await taskService.getTasksWhere({ id }))[0];
    return res.status(HttpStatusCode.OK).json(updatedTask);
  } catch (e) {
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
  }
};

const deleteTaskController = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      await taskService.deleteTask({ id });
      return res.status(HttpStatusCode.NO_CONTENT).end();
    }
    return res.status(HttpStatusCode.NOT_FOUND).end();
  } catch (e) {
    console.log(e);
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).end();
  }
};

module.exports = {
  createTaskController,
  getUsersTasksController,
  setTaskCompletedController,
  deleteTaskController,
};
