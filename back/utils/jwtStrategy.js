const { ExtractJwt, Strategy } = require("passport-jwt");

const userService = require("../services/user");
const { JWT_SECRET } = process.env;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

const strategy = new Strategy(options, async (jwtPayload, done) => {
  const { username, password } = jwtPayload;
  console.log("-------JWT PAYLOAD--------------")
  console.log(jwtPayload)
  if (!username || !password) {
    return done("Required fields are missing", false);
  }
  const client = await userService.getUserByUsername(username);
  if (password === client.password) {
    return done(null, client);
  } else {
    return done("Wrong password", false);
  }
});

module.exports = strategy;
