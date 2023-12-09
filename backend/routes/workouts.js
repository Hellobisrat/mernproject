const express = require('express');
const {createWorkout,getWorkouts, getWorkout} = require('../controllers/workoutController')

const Workout = require('../models/Workout')
const router = express.Router()

// Get all workouts
router.get('/', getWorkouts)

// Get a single workouts
router.get('/:id',getWorkout)


// post a single work out
router.post('/', createWorkout)

router.patch('/:id',(req,res)=>{
  res.json({mssg:'update a single workouts'})
})

router.delete('/:id',(req,res)=>{
  res.json({mssg:'delete a single workouts'})
})

module.exports = router