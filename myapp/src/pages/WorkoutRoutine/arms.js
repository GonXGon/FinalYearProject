import React ,{ useState, useEffect } from "react";
import "./workouts.css";
import axios from "axios";
import Pagination from '@mui/material/Pagination';
import { Box, Stack } from '@mui/material';
import ExerciseCard from '../../components/WorkoutCard/workoutcard';
import Loader from "../../components/Loader/Loader";

export default function Arms (){
  const [exercise, setExercises] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);
  const [exercisesPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exerciseData.slice(indexOfFirstExercise, indexOfLastExercise - 2);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper arms',
      headers: {
        'X-RapidAPI-Key': 'f1d3080e35mshb80b8aa756e6903p140bedjsn0e0c15f9a36d',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
        
    axios.request(options)
    .then(function (response) {
      setExerciseData(response.data);
      setExercises(response.data);
      console.error(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  }, []);

  const paginate = (event, value) => {
    setCurrentPage(value);
  };


  if (!currentExercises.length) return <Loader />;
  
  return(
    <div className= "workout-container-page">
      <Box>
        <Stack direction="row" sx={{ gap: { lg: '100px'} }} justifyContent="space-evenly" flexWrap="wrap" >
          {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
          ))}
        </Stack>
        <Stack alignItems="center">
          {exercise.length > 2 && (
            <Pagination 
              variant="outlined"
              color="primary"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercise.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </Stack>
      </Box>
    </div> 
  )
}