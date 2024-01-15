import React from 'react';
import Start from '../../components/startsection/start';
import Features from '../../components/Features/features';
import Meal from '../../components/Meals/meal';
import Dashboard from '../../components/Dashboard/dashboard';


export default function Home (){
    return(
        <>
            <Start></Start>
            <Features></Features>
            <Meal></Meal>
            <Dashboard></Dashboard>
        </>
    );
}