const router = require("express").Router();

const users = require("./users-model");
const restrict = require("../auth/protected-middleware");

//user must be logged in to view this,
router.get("/", restrict, (req, res) => {
  users
    .find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
