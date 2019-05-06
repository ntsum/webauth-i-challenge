const router = require("express").Router();
const bcrypt = require("bcryptjs");

const users = require("./users-model");

//creates user and changes password to hash
router.post("/register", (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 8);

  user.password = hash;

  users
    .add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//logs in registered user and returns logged in message
router.post("/login", (req, res) => {
  let { username, password } = req.body;

  users
    .findBy({ username })
    .first()
    .then(user => {
      //
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({
          message: `Welcome ${user.username}! You are now logged in! `
        });
      } else {
        res.status(401).json({ message: "YOU SHALL NOT PASS" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
