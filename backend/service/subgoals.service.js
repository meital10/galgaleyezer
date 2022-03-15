const mongoose = require("mongoose");

const subgoalSchemal = require("../models/subgoal.model");
const Subgoal = mongoose.model("Subgoal", subgoalSchemal);

// CRUD

// create a subgoal

const addSubgoal = async (subgoal) => {
  try {
    const newSubgoal = new Subgoal(subgoal);
    return await newSubgoal.save();
  } catch (err) {
    console.log("service addSubgoal:", err.message);
    throw err;
  }
};

// fetch subgoals

const fetchSubgoals = async () => {
  try {
    return await Subgoal.find({}).populate("users").populate("subgoals");
  } catch (err) {
    console.log("service fetchGoals err", err.message);
    throw err;
  }
};

// fetch goals by id

const fetchSubgoalId = async (id) => {
  try {
    return await Subgoal.findById({ _id: mongoose.Types.ObjectId(id) })
      .populate("users")
      .populate("subgoals");
  } catch (err) {
    console.log("service: fetchSubgoalId err", err);
    throw err;
  }
};

// update goal
const updateSubgoal = async (id, data) => {
  try {
    const result = await Subgoal.updateOne(
      { _id: mongoose.Types.ObjectId(id) },
      {
        $set: data,
      }
    );

    return result;
  } catch (err) {
    console.log("service: updateSubgoal err", err.message);
    throw err;
  }
};

// delete goal
const deleteSubgoal = async (id) => {
  try {
    const result = await Subgoal.deleteOne({
      _id: mongoose.Types.ObjectId(id),
    });
    return result;
  } catch (err) {
    console.log("service:deleteSubgoal err", err.message);
    throw err;
  }
};

module.exports = {
  addSubgoal,
  fetchSubgoals,
  fetchSubgoalId,
  updateSubgoal,
  deleteSubgoal,
};
