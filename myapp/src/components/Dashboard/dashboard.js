import React, {useRef,useEffect}  from 'react';
import "./dashboard.css";
import stats from '../../assets/images/dashboard.png';
import {gsap} from "gsap";
import {ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Dashboard() {
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
        <div className="dashboard">
            <div className="dashboard--container" >
                <div className="dashboardheading" ref={el=> {text=el}}>
                    <h2>Features</h2>
                    <h1>What we Offer</h1>
                    <div className="dashboard--services">
                        <p className="dashboard--item"> <i className="fas fa-check-circle"></i>BMI Calculator</p>
                    </div>
                </div>
                <div className="dashboardimage" >
                    <img className="dashboard--image" src={stats} alt="gym"/>
                </div>
            </div>

        </div>
    )
}