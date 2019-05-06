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

const authRouter = require("./auth-router.js");
const userRouter = require("./users-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

server.get("/", (req, res) => {
  res.send("WE ARE RUNNNNNING!");
});

module.exports = server;
