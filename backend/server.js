
const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
const workoutRoutes = require('./routes/workouts');
const { error, log } = require('console');
var cors = require('cors')

// express app
const app = express();

// middleware

app.use(cors())
app.use(express.json())
app.use((req,res,next)=>{
  console.log(req.path, req.method);
  next()
})


// routes
app.use('/api/workouts',workoutRoutes)

//connect dd

mongoose.connect(process.env.MONG_URI)
.then(()=>{
  // listen for request
  app.listen(process.env.PORT,()=>{
    console.log(`port start listening on port ${process.env.PORT}`)
  })
})
.catch((error=>{
  console.log(error);
}))

