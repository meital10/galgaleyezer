const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
    goal: {
      type: Schema.Types.ObjectId,
      ref: 'Goal',
    },
    group: {
      type: String,
      required: true,
      default: 'groupA',
      enum: [
        'groupA',
        'groupB',
        'groupC',
        'groupD',
        'groupE',
        'groupF',
        'groupG',
      ],
    },
    role: {
      type: String,
      default: 'student',
      enum: ['student', 'admin'],
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
