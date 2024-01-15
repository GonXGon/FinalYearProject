import React from 'react';
import "./workout.css";
import { useHistory} from 'react-router-dom';

export default function GymOptions (){
    const history = useHistory();

    const Chest = () => {
        history.push("/chest")
    }
    const Back = () => {
        history.push("/back")
    }
    const Abs = () => {
        history.push("/abs")
    }
    const Legs = () => {
        history.push("/legs")
    }
    const Shoulder = () => {
        history.push("/shoulder")
    }
    const Arms = () => {
        history.push("/arms")
    }
    return(
        <div className= "myworkout-container">
            <h2>Workout Routine</h2>
            <div className="gymOptions--card1" >
                <div className="gymOptions--card2 chest-container" >
                    <button className="gymOptions--button1" onClick={Chest}>CHEST</button>
                </div>
                <div className="gymOptions--card3 back-container" >
                    <button className="gymOptions--button2" onClick={Back}>BACK</button>
                </div>
                <div className="gymOptions--card4 abs-container" >
                    <button className="gymOptions--button3" onClick={Abs}>ABS</button>
                </div>
                <div className="gymOptions--card5 legs-container" >
                    <button className="gymOptions--button4" onClick={Legs}>LEGS</button>
                </div>
                <div className="gymOptions--card6 shoulder-container" >
                    <button className="gymOptions--button5" onClick={Shoulder}>SHOULDERS</button>
                </div>
                <div className="gymOptions--card7 arms-container" >
                    <button className="gymOptions--button6" onClick={Arms}>ARMS</button>
                </div>
            </div>
        </div>
    )
}