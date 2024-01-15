import React, { useEffect, useState } from 'react';
import { Button, Stack, Typography } from '@mui/material';
import "./workoutcard.css";
import { db, auth } from '../firebaseConfig/firebaseConfig';
import { onValue, ref, set } from 'firebase/database';

const ExerciseCard = ({ exercise }) => {
  const [projects, setProjects] = useState([]);

  const handleSaveExercise = () => {
    const userId = auth.currentUser.uid; // Get the user's ID
    set(ref(db, `users/${userId}/Exercises/${exercise.id}`), exercise); // create a new node for the exercise with the exercise's ID as the key
    window.alert("Exercise saved successfully!");
  };

  useEffect(() =>{
    const userId = auth.currentUser.uid; // Get the user's ID
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

  return(
    <div className="workout--card1">
      <img src={exercise.gifUrl} alt={exercise.name}/>
      <Stack direction="row">
        <Button variant="outlined" sx={{mx: '15px'}}>{exercise.bodyPart}</Button>
        <Button variant="outlined">{exercise.target}</Button>
      </Stack>
      <Typography variant="h6" component="h6" textTransform="capitalize" fontWeight="bold">{exercise.name} </Typography >
      <Button variant="contained" onClick={handleSaveExercise}>Save Exercise</Button>
    </div>
  );
};

export default ExerciseCard;
