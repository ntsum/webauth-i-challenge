const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server is live on ${port}`);
});
