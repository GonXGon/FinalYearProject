import React, {useRef,useEffect} from 'react';
import "./meal.css";
import meal from '../../assets/images/mealprep.jpg';
import {gsap} from "gsap";
import {ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Meal() {
    let text=useRef(null);

    useEffect(() => {
        gsap.to(text, {
            delay:0.4,
            duration: 1,
            x: '-700',
            opacity: 1,
            ease: 'ease-in',
            scrollTrigger: {
                trigger: text,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'restart complete',
            },
        });
    }, []);

    return(
        <div className='meal'>
            <div className="meal--container" >
                <div className="mealheading" ref={el=> {text=el}}>
                    <h2>Features</h2>
                    <h1>What we Offer</h1>
                    <div className="meal--services">
                        <p className="meal--item"> <i className="fas fa-check-circle"></i>Your Meal Recipes</p>
                    </div>
                </div>
                <div className="image">
                    <img className="meal--image" src={meal} alt="gym"/>
                </div>
            </div>
        </div>
    )
}