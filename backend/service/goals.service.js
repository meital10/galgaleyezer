const mongoose = require("mongoose");
// const Goal = require("../models/goal.model");
const goalSchema = require("../models/goal.model");
const Goal = mongoose.model("Goal", goalSchema);

// CRUD

// create a goal

const addGoal = async (goal) => {
  try {
    const newGoal = new Goal(goal);
    return await newGoal.save();
  } catch (err) {
    console.log("service addGoal".err.message);
    throw err;
  }
};

// fetch goals

const fetchGoals = async () => {
  try {
    return await Goal.find({}).populate("users");
  } catch (err) {
    console.log("service fetchGoals err", err.message);
    throw err;
  }
};

// fetch goals by id

const fetchGoalId = async (id) => {
  try {
    return await Goal.findById({ _id: mongoose.Types.ObjectId(id) }).populate(
      "users"
    );
  } catch (err) {
    console.log("service: fetchGoalId err", err);
    throw err;
  }
};

// update goal
const updateGoal = async (id, data) => {
  try {
    const result = await Goal.updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      {
        $set: data,
      }
    );

    return result;
  } catch (err) {
    console.log("service: updateGoal err", err.message);
    throw err;
  }
};

// delete goal
const deleteGoal = async (id) => {
  try {
    const result = await Goal.deleteOne({ _id: mongoose.Types.ObjectId(id) });
    return result;
  } catch (err) {
    console.log("service:deleteGoal err", err.message);
    throw err;
  }
};

module.exports = {
  addGoal,
  fetchGoals,
  fetchGoalId,
  updateGoal,
  deleteGoal,
};
