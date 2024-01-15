import React from 'react';
import "./workout.css";
import { useHistory} from 'react-router-dom';

export default function Myworkout (){
    const history1 = useHistory();
    const history2 = useHistory();

    const gymoptions = () => {
        history1.push("/gymoptions")
    }

    const cardioptions = () => {
        history2.push("/cardio-options")
    }

    return(
        <div className= "myworkout-container">
            <div className="myworkout--card1" >
                <div className="myworkoutimage-container" >
                    <button className="myworkout--button" onClick={gymoptions}>Workouts</button>
                </div>
            </div>
            <div className="myworkout--card2">
                <div className="cardio-container" >
                    <button className="cardio--button" onClick={cardioptions}>Cardio Workouts</button>
                </div>
            </div>
        </div>
            
    )
}