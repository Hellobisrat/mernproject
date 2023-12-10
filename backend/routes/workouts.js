const express = require('express');
const {createWorkout,getWorkouts, getWorkout,updateWorkout,deleteWorkout} = require('../controllers/workoutController')

const Workout = require('../models/Workout')
const router = express.Router()

// Get all workouts
router.get('/', getWorkouts)

// Get a single workouts
router.get('/:id',getWorkout)


// post a single work out
router.post('/', createWorkout)

router.patch('/:id',updateWorkout)

router.delete('/:id',deleteWorkout)

module.exports = router