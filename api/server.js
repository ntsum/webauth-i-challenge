// const express = require("express");
// const helmet = require("helmet");
// const cors = require("cors");
// const db = require("../data/dbConfig.js");

// const authRouter = require("./auth-router.js");
// const userRouter = require("./users-router");

// const server = express();

// server.use(helmet());
// server.use(express.json());
// server.use(cors());

// server.use("/api/auth", authRouter);
// server.use("/api/users", userRouter);

// server.get("/", (req, res) => {
//   res.send("We are RUNNNNNING!!!!");
// });

// module.export = server;

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const db = require("../data/dbConfig.js");
const session = require("express-session");

const authRouter = require("./auth-router.js");
const userRouter = require("./users-router");

const server = express();

const sessionConfig = {
  name: "monster", //by default would be sid
  secret: "gotta secret can u keep it",
  cookie: {
    httpOnly: true, //prevent access from javascript
    maxAge: 1000 * 70 * 1, //in milliseconds
    secure: false //true means only send the cookie over https
  },
  resave: false,
  saveUninitialized: true //
};

server.use(session(sessionConfig));
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send("WE ARE RUNNNNNING!");
});

module.exports = server;
