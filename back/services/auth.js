const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { BCRYPT_ROUNDS, JWT_SECRET, JWT_EXPIRES_IN } = process.env;

const salt = bcrypt.genSaltSync(+BCRYPT_ROUNDS);

const createPassword = (password) => bcrypt.hashSync(password, salt);

const resolvePassword = (password, hash) => bcrypt.compareSync(password, hash);

console.log(BCRYPT_ROUNDS, JWT_SECRET, JWT_EXPIRES_IN);

const createToken = (obj) =>
  jwt.sign(obj, JWT_SECRET, { expiresIn: +JWT_EXPIRES_IN });

const userAuthenticate = passport.authenticate("user", { session: false });
// const userAuthenticate = (req, res, next) => {
//   console.log(req.body);
//   passport.authenticate("user", { session: false }, (p1, p2, challenges, statuses) => console.log(p1, p2, challenges, statuses))(req, res, next);
// }

module.exports = {
  createPassword,
  resolvePassword,
  createToken,
  userAuthenticate,
};
