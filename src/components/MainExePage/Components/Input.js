import React, { useState, useEffect } from 'react'

const Inputf = () => {
  const [time, setTime] = useState("")
  const [equipments, setEquipment] = useState("")
  const [muscle, setMuscle] = useState("")
  const [fitnesslevel, setFitnesslevel] = useState("")
  const [fitnessgoal, setFitnessgoal] = useState("")

  const Timeinput = (e) => {
    setTime(e.target.value);
  };

  const Equipments = (e) => {
    setEquipment(e.target.value);
  };
  const Muscles = (e) => {
    setMuscle(e.target.value);
  };
  const Fitnesslevel = (e) => {
    setFitnesslevel(e.target.value);
  };
  const Fitnessgoal = (e) => {
    setFitnessgoal(e.target.value);
  };

  const timeOptions = ["", "10 min", "15 min", "20 min", "25 min", "30 min"]

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://workout-planner1.p.rapidapi.com/customized',
      params: {
        time: time,
        equipment: equipments,
        muscle: muscle,
        fitness_level: fitnesslevel,
        fitness_goals: fitnessgoal
      },
      headers: {
        'X-RapidAPI-Key': '8d0b924b57mshee7866c14865d06p1a3709jsn02e7e13f1e92',
        'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
      }
    };

    fetch(options.url, {
      method: options.method,
      params: options.params,
      headers: options.headers
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }, [time,equipments,muscle,fitnesslevel,fitnessgoal])

  return (
    <WorkoutContext.Provider value={workoutData}>
    <form onSubmit={Timeinput}>
      <div>
        <label>Time:</label>
        <select value={time} onChange={Timeinput}>
          {timeOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Equipments:</label>
        <select value={equipments} onChange={Equipments}>
          <option value="">None</option>
          <option value="option1">Dumbbells</option>
          <option value="option2">punching bag</option>
          <option value="option3">pull up bar</option>
          <option value="option4">battle rope</option>
          <option value="option5">Barbels</option>
          <option value="option6">Medicine ball</option>
          <option value="option7">plates</option>
        </select>
      </div>
      <div>
      <label>Muscles:</label>
      <select value={muscle} onChange={Muscles}>
          <option value="">None</option>
          <option value="option1">Biceps</option>
          <option value="option2">Back</option>
          <option value="option3">Chest</option>
          <option value="option4">Legs</option>
          <option value="option5">Triceps</option>
          <option value="option6">Forearms</option>
          <option value="option7">Abs</option>
          <option value="option8">Lats</option>
          <option value="option9">Calf</option>
        </select>
        </div>
        <div>
        <label>Fitness_level:</label>
        <select value={fitnesslevel} onChange={Fitnesslevel}>
          <option value="">None</option>
          <option value="option1">Begineer</option>
          <option value="option2">Intermediate</option>
          <option value="option3">Advanced</option>
        </select>
        </div>
        <div className={styles.formbr}>
          <label>Fitness Goal:</label>
          <select value={fitnessgoal} onChange={Fitnessgoal} required= "true">
            <option value="">None</option>
            <option value="option1">Weight Loss</option>
            <option value="option2">Muscles building</option>
            <option value="option3">Balance and Coordination</option>
            <option value="option4">Strength</option>
          </select>
       </div>
      <button type="submit">Submit</button>
    </form>
    </WorkoutContext.Provider>
  )
}

export default Inputf