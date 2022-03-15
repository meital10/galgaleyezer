const mongoose = require("mongoose");
const userService = require("../service/users.service");

const isAdmin = async (req, res, next) => {
  try {
    if (req.user && req.user.role === "admin") {
      return next();
    }
    return res.sendStatus(401);
  } catch (err) {
    console.log("validation:isAuth err", err.message);
    throw err;
  }
};

const isStudent = async (req, res, next) => {
  try {
    if (req.user && req.user.role === "student") {
      return next();
    }
    return res.status(401).json;
  } catch (err) {
    console.log("validation:isStudent err", err.message);
    throw err;
  }
};

module.exports = { isAdmin, isStudent };
