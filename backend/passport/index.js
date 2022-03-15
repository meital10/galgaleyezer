const createHashedPassword = require("./../service/auth-utils");
const User = require("../models/users.model");

module.exports = {
  localStrategyHandler: (username, password, done) => {
    console.log("checking database!");
    User.findOne({ email: username, password: createHashedPassword(password) })
      .then((user) => {
        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        return done(null, user);
      })
      .catch((err) => {
        return done(err);
      });
  },
  serializeUser: (user, done) => {
    done(null, user);
  },
  deserializeUser: (user, done) => {
    done(null, user);
  },
  isValid: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.sendStatus(401);
  },
};
