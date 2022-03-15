const express = require("express");
const router = express.Router();
const userService = require("../service/users.service");
const passport = require("passport");
const { isValid } = require("../passport");

// -------------------------------------------------SIGNUP-------------------------------------------------
router.post("/signup", async (req, res) => {
  try {
    console.log("signup:", req.body);
    const newUser = await userService.addUser(req.body);
    return res.status(200).send(newUser);
  } catch (err) {
    console.log("error signup: ", err.message);
    return res.status(400).send(err);
  }
});

// -------------------------------------------------LOGIN---------------------------------------------------
router.post("/login", passport.authenticate("local", {}), (req, res) => {
  console.log("checking database!");
  console.log(req.user);
  res.send({
    message: "success login",
    user: req.user,
  });
});

// ---------------------------------------------CURRENT USER--------------------------------------------------
router.get("/currentUser", isValid, (req, res) => {
  console.log("current user", req.user);
  res.json({
    user: req.user,
  });
});

// -------------------------------------------------LOGOUT-----------------------------------------------------

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.sendStatus(400);
    }
    req.logout();
    res.cookie("connect.sid", req.cookies["connect.sid"], { maxAge: -1 });
    res.status(200).json(null);
  });
});

// -------------------------------------------------------------------------------------------------------------

//CreateUser
router.post("/users", async (req, res) => {
  try {
    const newUser = await userService.addUser(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    console.log("controller:createUser err", err.message);
    res.status(500).json({
      message: "server error",
    });
  }
});

// update

router.put("/users", async (req, res) => {
  try {
    // console.log(req.params.id, req.user._id);
    const { _id } = req.user;
    const data = req.body;
    await userService.updateUser(_id, data);
    res.json({ success: true });
  } catch (err) {
    console.log("controller: updateUser err", err.message);
    res.status(500).json({
      message: "server error",
    });
  }
});
// delete
router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userService.deleteUser(id);
    res.json(result);
  } catch (err) {
    console.log("controller: deleteUser err", err.message);
    res.status(500).json({
      message: "server error",
    });
  }
});

router.get("/users", async (req, res) => {
  try {
    console.log("controller getUsers ");
    const users = await userService.fetchUsers(req.query);
    res.json(users);
  } catch (err) {
    console.log("controller getUsers err", err.message);
    res.status(400).json({
      message: "server error",
    });
  }
});

// get user by id

router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userService.fetchUsersId(id);
    res.json(result);
  } catch (err) {
    console.log("controller: getUserById err", err.message);
    res.status(500).json({
      message: "server error",
    });
  }
});

module.exports = router;
