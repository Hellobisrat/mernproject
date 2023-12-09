const express = require('express');

const Workout = require('../models/Workout')
const router = express.Router()

// Get all workouts
router.get('/', async(req,res)=>{
  try{
    const workout =  await Workout.find()
    res.json(workout)
  } catch(error) {
    res.status(401).json({error:error.message})
  }
  }
  
)

// Get a single workouts
router.get('/:id',(req,res)=>{
  res.json({mssg:'Get a single workouts'})
})

// post a single work out
router.post('/', async(req,res)=>{

  try {
    const workout = await  Workout.create(req.body)

    res.status(200).json(workout)
  }
  catch (error){
    res.status(400).json({error:error.message})
  }

})

router.patch('/:id',(req,res)=>{
  res.json({mssg:'update a single workouts'})
})

router.delete('/:id',(req,res)=>{
  res.json({mssg:'delete a single workouts'})
})

module.exports = router