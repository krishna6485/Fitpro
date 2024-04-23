import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
import { useContext } from 'react'
import WorkoutContext from './WorkoutContextProvider/WorkoutContext'

const Card = () => {
  const workoutData = useContext(WorkoutContext);

  return (
    <div>
      <Typography variant="h4" mb="10px"
        sx={{ fontSize: { lg: '32px', xs: '24px' } }} textTransform="capitalize"
      >
        Warm Up
      </Typography>
      {workoutData.WarmUp.map((exercise, index) => (
        <Link className="exercise-card" to={`/exercise/${exercise.Exercise._id}`} key={exercise.Exercise._id}>
          <img src={exercise.Exercise.gifUrl} alt={exercise.Exercise.name} loading="lazy" />
          <Stack direction="row"
          >
            <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
              {exercise.Exercise.bodyPart}
            </Button>
            <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
              {exercise.Exercise.target}
            </Button>
          </Stack>
          <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize"
          >
            {exercise.Exercise.name}
          </Typography>
        </Link>
      ))}
      <Typography variant="h4" mb="10px"
        sx={{ fontSize: { lg: '32px', xs: '24px' } }} textTransform="capitalize"
      >
        Exercises
      </Typography>
      {workoutData.Exercises.map((exercise, index) => (
        <Link className="exercise-card" to={`/exercise/${exercise.Exercise._id}`} key={exercise.Exercise._id}>
          <img src={exercise.Exercise.gifUrl} alt={exercise.Exercise.name} loading="lazy" />
          <Stack direction="row"
          >
            <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
              {exercise.Exercise.bodyPart}
            </Button>
            <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
              {exercise.Exercise.target}
            </Button>
          </Stack>
          <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize"
          >
            {exercise.Exercise.name}
          </Typography>
        </Link>
      ))}
      <Typography variant="h4" mb="10px"
        sx={{ fontSize: { lg: '32px', xs: '24px' } }} textTransform="capitalize"
      >
        Cool Down
      </Typography>
      {workoutData.CoolDown.map((exercise, index) => (
        <Link className="exercise-card" to={`/exercise/${exercise.Exercise._id}`} key={exercise.Exercise._id}>
          <img src={exercise.Exercise.gifUrl} alt={exercise.Exercise.name} loading="lazy" />
          <Stack direction="row"
          >
            <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
              {exercise.Exercise.bodyPart}
            </Button>
            <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
              {exercise.Exercise.target}
            </Button>
          </Stack>
          <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize"
          >
            {exercise.Exercise.name}
          </Typography>
        </Link>
      ))}
    </div>
  )
}
export default Card;