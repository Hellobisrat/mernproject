const Workout = require('../models/Workout')


// get all workout

const getWorkouts = async (req,res)=>{
  try{
  const workout = await Workout.find({}).sort({createdAt: -1})
  res.status(200).json(workout)
  } catch(error){
    res.json(error)
  }
  
}



// get a single work out

const getWorkout = async (req,res)=>{
  const {id} = req.params
  try {
    const workout = await Workout.findById(id)
    if(!workout) {
      return res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json(error)
  }
}




// create new workout

const createWorkout = async(req,res)=>{
  const { title, load, reps} = req.body
  
  try {
    
    const workout = await  Workout.create({title,load,reps})

    res.status(200).json(workout)
  }
  catch (error){
    res.status(400).json({error:error.message})
  }
}

module.exports ={createWorkout,getWorkouts,getWorkout}



// delete work out