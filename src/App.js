import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import BMICalculator from './components/bmicalculator';
import CalorieCounter from './components/CalorieCounter';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup'

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path='/bmicalculator' element={<BMICalculator />} />
      <Route path='/CalorieCounter' element={<CalorieCounter />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Signup' element={<Signup />} />
    </Routes>
  </Box>
);

export default App;
