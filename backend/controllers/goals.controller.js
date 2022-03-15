const express = require("express");
const router = express.Router();
const goalService = require("../service/goals.service");
// const passport = require("passport");
// const { isValid } = require("../passport");

router.post("/add-goal", async (req, res) => {
  try {
    console.log(req.body);
    const newGoal = await goalService.addGoal(req.body);
    res.status(200).json(newGoal);
  } catch (err) {
    console.log("controller err:", err.message);
    return res.status(400).send(err);
  }
});

// fetch goals

router.get("/goals", async (req, res) => {
  try {
    const goals = await goalService.fetchGoals();
    res.json(goals);
  } catch (err) {
    console.log("controller goals err", err.message);
    res.status(400).json({
      message: "server error",
    });
  }
});

// fetch goal by id
router.get("/goal/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await goalService.fetchGoalId(id);
    res.json(result);
  } catch (err) {
    console.log("controller: getGoalById err", err.message);
    res.status(500).json({
      message: "server error",
    });
  }
});

// edit goal
router.put("/goal/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await goalService.updateGoal(id, data);
    res.json({ success: true });
  } catch (err) {
    console.log("controller: updateGoal err", err.message);
    res.status(500).json({
      message: "server error",
    });
  }
});

// delete goal
router.delete("/goal/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await goalService.deleteGoal(id);
    res.json(result);
  } catch (err) {
    console.log("controller:deleteGoal err", err.message);
    res.status(500).json({
      message: "server error",
    });
  }
});

module.exports = router;

// router.post("/finalGoal", async (req, res) => {
//   try {
//     let finalGoal = new finalGoal({
//       ...req.body,
//       // store_id: req.user._id,
//       // numReviews: 0,
//     });
//     let createdFinalGoal = await newFinalGoal.save();

//     return res.status(200).send(createdFinalGoal);
//   } catch (err) {
//     console.log("error signup: ", err.message);
//     return res.status(400).send(err);
//   }
// });

//---------טיפ להשגת הדירוג הגבוה----------//
// const getTopProducts = asyncHandler(async (req, res) => {
//   const products = await Product.find({}).sort({ rating: -1 }).limit(3);

//   res.send(products);
// });
