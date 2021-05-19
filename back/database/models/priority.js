const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Priority = sequelize.define(
  "Priority",
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
  },
  {
    tableName: "priority",
    timestamps: false,
  }
);

module.exports = Priority;
