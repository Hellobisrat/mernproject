const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema ({
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

mongoose.exports = mongoose.model('Workout', workoutSchema)