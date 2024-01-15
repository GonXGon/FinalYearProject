import React, { useEffect, useState } from 'react';
import './bmi.css';
import { Button, Typography } from '@mui/material';
import { db, auth } from '../firebaseConfig/firebaseConfig';
import { onValue, ref, set } from 'firebase/database';

export default function BmiCard ({ result }){
  const [results, setResults] = useState([]);
  const [projects, setProjects] = useState([]);

  //handles when the save button is clicked saves the exercise data into firebase with user unique 
  //id and mael head title
  const handleSaveExercise = () => {
    const userId = auth.currentUser.uid;
    set(ref(db, `users/${userId}/BMI/${result.id}`), result);
    window.alert("Meal saved successfully!");
  };

  //handles the user saved data if the one user is logged in only his data will be saved
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

    //gets the data from API 
    useEffect(() => {
      const url = `https://body-mass-index-bmi-calculator.p.rapidapi.com/weight-category?bmi=${result.bmi}`;
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
    }, [result.bmi]);

  return (
    <>
      <div key={result.id} className="bmi--card">
        <Typography variant="h6" component="h6" textTransform="capitalize">BMI: {result.bmi}</Typography>
        <Typography variant="h6" component="h6" textTransform="capitalize">Weight Category: {results.length > 0 ? results[results.length - 1].weightCategory : ''}</Typography>
        <Typography variant="h6" component="h6" textTransform="capitalize">Obese Class: {results.length > 0 ? results[results.length - 1].ObeseClass : ''}</Typography>
        <Button variant="contained" onClick={handleSaveExercise}>Save Exercise</Button>
      </div>
    </>
  )
}


