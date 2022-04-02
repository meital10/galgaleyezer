const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema(
  {
    student: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    myGoal: {
      type: String,
      required: true,
    },
    subGoals: [{ type: Schema.Types.ObjectId, ref: 'SubGoal' }],
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
