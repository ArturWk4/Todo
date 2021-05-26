const { Task } = require("../database/models");

const getTasksWhere = async (where) => Task.findAll({where});

const updateTask = async (where, toChange) => Task.update(toChange, { where });

const createTask = async (task) => Task.create(task);

const getTaskWhere = async (where) => (await getTasksWhere({where}))[0];

const deleteTask = async (where) => Task.destroy({ where });

module.exports = {
  createTask,
  getTasksWhere,
  updateTask,
  getTaskWhere,
  deleteTask,
};
