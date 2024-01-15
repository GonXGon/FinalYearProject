import React from 'react';
import "./start.css";
import { useHistory} from 'react-router-dom';

export default function Start (){
    const history = useHistory();

    const coursesPage = () => {
        history.push("/register")
    }
        return(
            <div className= "start-container">
                <h1>Welcome to The Gym Application</h1>
                <h3>Shape your body like the way you want it.</h3>
                <button className="myworkout" onClick={coursesPage}>Join Now</button>
            </div>
        )
}