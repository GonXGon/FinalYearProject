import React, {useRef,useEffect} from "react";
import "./features.css";
import {gsap} from "gsap";
import {ScrollTrigger } from 'gsap/ScrollTrigger';
import f from '../../assets/images/f.jpg';
gsap.registerPlugin(ScrollTrigger);

export default function Features (){
    let text=useRef(null);

    useEffect(() => {

    gsap.to(text, {
        delay:0.4,
        duration: 1,
        x: '0',
        opacity: 1,
        ease: 'ease-in',
        scrollTrigger: {
            trigger: text,
            start: 'top 90%',
            end: 'bottom 60%',
            toggleActions: 'restart complete ',
        },
    });
        
    }, []);
    return(
        <div className="feautures">
            <div className="feautures--container" >
                <div className="heading" ref={el=> {text=el}}>
                    <h2>Features</h2>
                    <h1>What we Offer</h1>
                    <div className="features--services">
                        <p className="feature--item"><i className="fas fa-check-circle"></i>Have Your Personalised Workouts</p>
                        <p className="feature--item"><i className="fas fa-check-circle"></i>Cardio Workouts</p>
                    </div>
                </div>
                <div className="image" >
                    <img className="features--image" src={f} alt="gym"/>
                </div>
            </div>

        </div>
    )
}