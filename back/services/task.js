const taskAccessor = require("../data-access/task");
const { Task } = require("../database/models");

const createTask = async (task) => taskAccessor.createTask(task);
const getTasksWhere = async (where) => taskAccessor.getTasksWhere(where);

const updateTask = async (where, toChance) =>
  taskAccessor.updateTask(where, toChance);

const changeTaskStatus = async (id, completed) => {
  return await taskAccessor.updateTask({ id }, { completed });
};

const deleteTask = async (where) => taskAccessor.deleteTask(where);

module.exports = {
  createTask,
  getTasksWhere,
  updateTask,
  changeTaskStatus,
  deleteTask,
};
