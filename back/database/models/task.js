const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Task = sequelize.define(
  "Task",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  {
    tableName: "task",
    timestamps: false,
  }
);

module.exports = Task;
