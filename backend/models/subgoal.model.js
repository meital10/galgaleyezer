const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subgoalSchema = new Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    myGoal: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Goal",
    },
    weekSubgoal: {
      type: String,
      required: true,
    },
    weekActions: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

// const Subgoal = mongoose.model("Subgoal", subgoalSchema);

// module.exports = Subgoal;
module.exports = subgoalSchema;
