module.exports = (req, res, next) => {
  if (req.session && req.session.username) {
    next();
  } else {
    res.status(401).json({ message: "YOU GOTTA LOGIN!" });
  }
};

// const bcrypt = require("bcryptjs");

// const Users = require("../api/users-model");

// function restrict(req, res, next) {
//   const { username, password } = req.headers;

//   if (username && password) {
//     Users.findBy({ username })
//       .first()
//       .then(user => {
//         if (user && bcrypt.compareSync(password, user.password)) {
//           next();
//         } else {
//           res.status(401).json({ message: "Invalid Credentials" });
//         }
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   } else {
//     res.status(400).json({ message: "YOU! SHALL! NOT! PASS!" });
//   }
// }

// module.exports = restrict;
