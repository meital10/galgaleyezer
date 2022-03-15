const express = require("express");
const router = express.Router();
const subgoalService = require("../service/subgoals.service");

// const passport = require("passport");
// const { isValid } = require("../passport");

// add subgoal

router.post("/add-subgoal", async (req, res) => {
  try {
    console.log(req.body);
    const newSubgoal = await subgoalService.addSubgoal(req.body);
    res.status(200).json(newSubgoal);
  } catch (err) {
    console.log("controller subgoal err:", err.message);
    return res.status(400).send(err);
  }
});

// fetch subgoals

router.get("/subgoals", async (req, res) => {
  try {
    const subgoals = await subgoalService.fetchSubgoals();
    res.json(subgoals);
  } catch (err) {
    console.log("controller subgoals err", err.message);
    res.status(400).json({
      message: "server error",
    });
  }
});

// fetch subgoal by id
router.get("/subgoal/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await subgoalService.fetchSubgoalId(id);
    res.json(result);
  } catch (err) {
    console.log("controller: getSubgoalById err", err.message);
    res.status(500).json({
      message: "server error",
    });
  }
});

// edit subgoal
router.put("/subgoal/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await subgoalService.updateSubgoal(id, data);
    res.json({ success: true });
  } catch (err) {
    console.log("controller: updateSubgoal err", err.message);
    res.status(500).json({
      message: "server error",
    });
  }
});

// delete subgoal
router.delete("/subgoal/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await subgoalService.deleteSubgoal(id);
    res.json(result);
  } catch (err) {
    console.log("controller:deleteGoal err", err.message);
    res.status(500).json({
      message: "server error",
    });
  }
});

module.exports = router;
