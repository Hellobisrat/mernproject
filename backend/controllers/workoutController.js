const { default: mongoose } = require('mongoose')
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
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No such workout'})
  }
 
    const workout = await Workout.findById(id)
    //if(!workout) {
      //return res.status(404).json({error: 'No such workout'})
    //}
    res.status(200).json(workout)


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


// delete work out

const deleteWorkout = async (req,res)=>{
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No such workout'})
  }
const workout = await Workout.findOneAndDelete({_id:id})
//if(!workout) {
  //return res.status(400).json({error: 'No such workout'})
//}
res.status(200).json(workout)
}

const updateWorkout = async(req,res)=>{
  const {id} = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'No such workout'})
  }
  const workout = await Workout.findOneAndUpdate({_id:id},{...req.body})
  //if(!workout) {
    //return res.status(400).json({error: 'No such workout'})
  //}
  res.status(200).json(workout)
}



module.exports ={createWorkout,getWorkouts,getWorkout,deleteWorkout,updateWorkout}


