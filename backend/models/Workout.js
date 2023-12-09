const mongoose = require('mongoose')
const { Schema, model } = require('mongoose');



const WorkoutSchema = new Schema ({
  title: {
    type : String,
    required: true
  },
  reps: {
    type: Number,
    require: true
  },
  load: {
    type: Number,
    require: true
  }
}, {timestamps: true} )


const Workout = model('Workout', WorkoutSchema);

module.exports = Workout;
