const mongoose = require('mongoose');
const { Schema } = mongoose;

const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    exerciseType: {
      type: String,
      required: true,
      enum: ['Running', 'Cycling', 'Swimming', 'Gym', 'Other']
    },
    description: { type: String, required: false },
    duration: { 
        type: Number, 
        required: true,
        validate: {
            validator: Number.isInteger,
            message: 'Duration should be an integer.'
        },
        min: [1, 'Duration should be positive.']
    },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
