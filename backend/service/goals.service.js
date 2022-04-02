const mongoose = require('mongoose');
const Goal = require('../models/goal.model');
const User = require('../models/users.model');

// CRUD

// Create and Save goal to user.
/*
example of json to create goal:
  {
  "myGoal": "run 10km"
  }
*/
const addGoal = async (req, res) => {
  const { myGoal } = req.body;
  const { _id } = req.user;

  try {
    const user = await User.findById(_id);
    if (user.goal) {
      return res.status(402).send('The user already has a goal');
    }

    const newGoal = new Goal({ myGoal, student: _id });
    await newGoal.save();

    user.goal = newGoal._id;
    await user.save();

    return res.status(200).json(newGoal);
  } catch (err) {
    console.warn('service addGoal', err.message);
    return res.status(402).send(err);
  }
};

// fetch goals

const fetchGoals = async () => {
  try {
    return await Goal.find({}).populate('users');
  } catch (err) {
    console.log('service fetchGoals err', err.message);
    throw err;
  }
};

// fetch goals by id

const fetchGoalId = async (id) => {
  try {
    return await Goal.findById({ _id: mongoose.Types.ObjectId(id) }).populate(
      'users'
    );
  } catch (err) {
    console.log('service: fetchGoalId err', err);
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
    console.log('service: updateGoal err', err.message);
    throw err;
  }
};

// delete goal
const deleteGoal = async (id) => {
  try {
    const result = await Goal.deleteOne({ _id: mongoose.Types.ObjectId(id) });
    return result;
  } catch (err) {
    console.log('service:deleteGoal err', err.message);
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
