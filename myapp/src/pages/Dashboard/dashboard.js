import React, { useState } from 'react';
import "./dashboard.css";
import { Box, TextField, Button, Stack } from '@mui/material';
import BmiCard from '../../components/BMI/bmiCard';

export default function Dashboard() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5451ea299fmshf496ec81ccf2136p13d80ajsnf817aa9e1883',
        'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
      }
    };

    fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      setResults([...results, data]);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    });
    
  }

  return (
    <div className="dashboard-container">
      {results.length === 0 && (
      <Box onSubmit={handleSubmit} component="form" sx={{'& > :not(style)': { width: '500px' },}}> 
          <div className="veg--card1">BMI Calculator

            <label htmlFor="weight">Weight :</label>
            <TextField type="number" variant="outlined" label="Weight (kgs)" id="weight" value={weight} onChange={(event) => setWeight(event.target.value)} />

            <label htmlFor="height">Height:</label>
            <TextField type="number" variant="outlined" label="Height (m)" id="height" value={height} onChange={(event) => setHeight(event.target.value)} />

            <Button variant="contained" type="submit">submit</Button>
          </div>
        </Box>
      )}
        <Stack direction="row" sx={{ gap: { lg: '100px'} }} justifyContent="space-evenly" flexWrap="wrap" >
        {results.map((result, index) => (
          <BmiCard key={result.id} result={result}/>
        ))}
        </Stack>
    </div>
  );
}


