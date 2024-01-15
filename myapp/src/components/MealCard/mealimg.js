import React, { useState } from "react";
import "./mealcard.css";
import { Typography } from '@mui/material';

export default function MealImage ({ id }){
  const [imageUrl, setImageUrl] = useState("");
  const [instructions, setInstructions] = useState("");

  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`;

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
      setImageUrl(data.image);
      setInstructions(data.instructions);
    })
    .catch(() => {
      console.log("error");
    });
  const instructionSteps = instructions.split('. ');

  return (
    <>
      <img className="imgcard" src={imageUrl} alt="recipe" />
      <Typography variant="h6" component="h6" textTransform="capitalize">
        Instructions:
        {instructionSteps.map((step, index) => (
          <div key={index}>
            <strong>Step {index + 1}:</strong> {step}
          </div>
        ))}
      </Typography>
    </>
  );
}
