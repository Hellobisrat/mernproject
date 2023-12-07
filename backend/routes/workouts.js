const express = require('express');


const router = express.Router()

// Get all workouts
router.get('/',(req,res)=>{
  res.json({mssg:'Get all workouts'})
})

// Get a single workouts
router.get('/:id',(req,res)=>{
  res.json({mssg:'Get a single workouts'})
})

// post a single work out
router.post('/',(req,res)=>{
  res.json({mssg:'POst a single workouts'})
})

router.patch('/:id',(req,res)=>{
  res.json({mssg:'update a single workouts'})
})

router.delete('/:id',(req,res)=>{
  res.json({mssg:'delete a single workouts'})
})

module.exports = router