const { User, Task } = require("../database/models");

const getUsersWhere = (where) =>
  User.findAll({
    where,
    include: [
      {
        association: User.associations.tasks,
        attributes: ["id", "title", "completed"],
        include: [
          {
            association: Task.associations.priority,
            attributes: ["id", "title"],
          },
        ],
      },
    ],
  });

const getUserByUsername = async (username) =>
  (await getUsersWhere({ username }))[0];

const getUserByPk = async (pk) => User.findByPk(pk);
const createUser = (user) => User.create(user);

module.exports = {
  createUser,
  getUserByUsername,
  getUserByPk,
};
