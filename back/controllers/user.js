const HttpStatusCodes = require("http-status-codes");
const validation = require("../utils/validation");
const userService = require("../services/user");
const authService = require("../services/auth");

const loginController = async (req, res) => {
  const { body } = req;
  try {
    if (!validation.isLoginPayloadValid(body)) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ message: "Required payload is not provided" });
    }
    const { username, password } = body;
    const user = await userService.getUserByUsername(username);
    if (!user) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ message: `User ${username} does not exist` });
    }
    if (!authService.resolvePassword(password, user.password)) {
      return res
        .status(HttpStatusCodes.UNAUTHORIZED)
        .json({ message: "Wrong passowrd" });
    }
    const successfulResponce = userService.getUserLoginResponse(user);
    return res.status(HttpStatusCodes.OK).json(successfulResponce);
  } catch (e) {
    return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).end();
  }
};

const registrationController = async (req, res) => {
  const { body } = req;
  try {
    if (!validation.isRegistrationPayloadValid(body)) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ message: "Required payload is not provided" });
    }
    const { username } = body;
    const user = await userService.getUserByUsername(username);
    if (user) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ message: `User ${username} is already exist` });
    }
    await userService.createUser(body);
    return res.status(HttpStatusCodes.CREATED).end();
  } catch (e) {
    return res
      .status(HttpStatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Smth went wrong" });
  }
};

module.exports = {
  loginController,
  registrationController,
};
