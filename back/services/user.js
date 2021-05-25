const userAccessor = require("../data-access/users");
const authService = require("./auth");
const { JWT_EXPIRES_IN } = process.env;

const createUser = async (user) => {
  const password = authService.createPassword(user.password);
  return await userAccessor.createUser({ ...user, password });
};

const getUserByUsername = (username) =>
  userAccessor.getUserByUsername(username);

const getUserFields = (user) => {
  const { id, name, username, password } = user;
  return { id, name, username, password };
};

const getUserLoginResponse = (user) => {
  const token = authService.createToken({
    username: user.username,
    password: user.password,
  });
  const data = getUserFields(user);
  return {
    token,
    data,
    expiresIn: JWT_EXPIRES_IN,
  };
};

module.exports = {
  createUser,
  getUserByUsername,
  getUserFields,
  getUserLoginResponse,
};
