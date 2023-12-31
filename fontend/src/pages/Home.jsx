import {useEffect, useState} from 'react'

function Home() {
  const[workouts, setworkouts] = useState(null)
  useEffect(()=>{
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts')
      const json = await response.json()
      console.log(json)
      if(response.ok){
       setworkouts(json)
      }
    }
    fetchWorkouts()
  },[])
  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((workout)=> (
          <p key={workout._id}>{workout.title}</p>
        ))}
      </div>
    </div>
  )
}

export default Home