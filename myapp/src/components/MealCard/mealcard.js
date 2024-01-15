import React, { useEffect, useState } from 'react';
import "./mealcard.css";
import { Button, Typography } from '@mui/material';
import MealImage from "./mealimg";

import { db, auth } from '../firebaseConfig/firebaseConfig';
import { onValue, ref } from 'firebase/database';
import { set } from 'firebase/database';

export default function MealCard ({ result }){
  const [projects, setProjects] = useState([]);

  const handleSaveExercise = () => {
    const userId = auth.currentUser.uid;
    set(ref(db, `users/${userId}/Meal/${result.id}`), result);
    window.alert("Meal saved successfully!");
  };

  useEffect(() =>{
    const userId = auth.currentUser.uid;
    const query = ref(db, `users/${userId}/projects`);
    return onValue(query, (snapshot) =>{
      const data = snapshot.val();

      if(snapshot.exists()){
        Object.values(data).map((project) =>{
          setProjects((projects) => [...projects,project]);
        });
      }
    });
  }, []);

  return (
    <>
      <div key={result.id} className="mealcard--card">
        <Typography variant="h6" component="h6" textTransform="capitalize" >Name: {result.title}</Typography>
        <MealImage id={result.id} meal={result} key={result.id}/>
        <Button variant="contained" onClick={handleSaveExercise}>Save Exercise</Button>
      </div>
    </>
  )
}


