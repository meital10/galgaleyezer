const crypto = require("crypto");

const createHashedPassword = (password) =>
  crypto
    .createHmac("sha256", process.env.PASSWORD_HASH)
    .update(password)
    .digest("hex");

module.exports = createHashedPassword;
