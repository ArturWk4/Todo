const User = require("./user");
const Task = require("./task");
const Priority = require("./priority");

User.hasMany(Task, {
  sourceKey: "id",
  foreignKey: "userId",
  as: "tasks",
});

Task.belongsTo(Priority, {
  foreignKey: "priorityId",
  as: "priority",
});

module.exports = {
  User,
  Task,
  Priority,
};
