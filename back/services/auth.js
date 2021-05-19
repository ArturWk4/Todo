const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { BCRYPT_ROUNDS, JWT_SECRET, JWT_EXPIRES_IN } = process.env;

const salt = bcrypt.genSaltSync(+BCRYPT_ROUNDS);

const createPassword = (password) => bcrypt.hashSync(password, salt);

const resolvePassword = (password, hash) => bcrypt.compareSync(password, hash);

const createToken = (obj) =>
  jwt.sign(obj, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

const userAuthenticate = passport.authenticate("user", { session: false });

module.exports = {
  createPassword,
  resolvePassword,
  createToken,
  userAuthenticate,
};
