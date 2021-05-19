const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const sequelize = require("./database/connection");
const _forTestCreatingTablesBeforeNotUseInCode = require("./database/models");
const PORT = process.env.PORT;
const publicRouter = require("./routes");
const passport = require("passport");
const cors = require("cors");
const jwtStrategy = require("./utils/jwtStrategy");

const app = express();

passport.use("user", jwtStrategy);
app.use(
  cors({
    corsOptions: {
      origin: (origin, callback) => {
        if (originsWhitelist.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
    },
  })
);
app.use(passport.initialize());
app.use(express.json());
app.use(publicRouter);

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT);
    console.log("Hello from server, port:", PORT);
  } catch (e) {
    console.log(`SOME ERR: ${e}`);
  }
}

start();
