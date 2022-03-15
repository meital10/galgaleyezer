const mongoose = require("mongoose");
const User = require("../models/users.model");

const uploadProfileImage = async (_id, avatar) => {
  try {
    const result = await User.findByIdAndUpdate(_id, { avatar });
    return result;
  } catch (err) {
    console.log("service updateUser err", err.message);
  }
};

module.exports = {
  uploadProfileImage,
};
