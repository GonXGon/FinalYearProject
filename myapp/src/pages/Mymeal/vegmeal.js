import React, { useState } from 'react';
import "./vegmeal.css";
import { Box, TextField, Button, Stack } from '@mui/material';
import MealCard from '../../components/MealCard/mealcard';

export default function VegMeal (){

  const [timeFrame, setTimeFrame] = useState('');
  const [diet, setDiet] = useState('');
  const [targetCalories, settargetCalories] = useState('');
  const [exclude, setExclude] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=${timeFrame}&targetCalories=${targetCalories}&diet=${diet}&exclude=${exclude}`;

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5451ea299fmshf496ec81ccf2136p13d80ajsnf817aa9e1883',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      setResults(data.meals);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    });
    
  }

  return(
    <div className="MYveg-container">
      {results.length === 0 && (
        <Box onSubmit={handleSubmit} component="form" sx={{'& > :not(style)': { width: '500px' },}}>
          <div className="veg--card1">
            <label htmlFor="timeFrame">Time Frame : </label>
            <TextField type="text" variant="outlined" label="Time Frame" id="timeFrame" value={timeFrame} onChange={(event) => setTimeFrame(event.target.value)} />

            <label htmlFor="targetCalories">Target Calories:</label>
            <TextField type="number" variant="outlined" label="Target Calories" id="targetCalories" value={targetCalories} onChange={(event) => settargetCalories(event.target.value)} />

            <label htmlFor="diet">Dietry Requirements:</label>
            <TextField type="text" variant="outlined" label="Dietry Requirements" id="diet" value={diet} onChange={(event) => setDiet(event.target.value)} />

            <label htmlFor="exclude">Exclude Ingredients:</label>
            <TextField type="text" variant="outlined" label="Exclude Ingredients" id="exclude" value={exclude} onChange={(event) => setExclude(event.target.value)} />

            <Button variant="contained" type="submit">Search</Button>
          </div>
        </Box>
        )}
        <Stack direction="row" sx={{ gap: { lg: '100px'} }} justifyContent="space-evenly" flexWrap="wrap" >

          {results.map((result, index) => (
            <MealCard key={result.id} result={result}/>
          ))}
        </Stack>
    </div>
  );
}