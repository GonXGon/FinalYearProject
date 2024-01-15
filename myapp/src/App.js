import React, { useState, useEffect } from 'react';
import {auth} from './components/firebaseConfig/firebaseConfig';
import './App.css';
import Home from './pages/homepage/home'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Myworkout from './pages/Myworkout/workout';
import Dashboard from './pages/Dashboard/dashboard';
import GymOptions from './pages/Myworkout/gymoptios';
import CardioOptions from './pages/WorkoutRoutine/cardioption';
import { Login } from './pages/login/login';
import { SignUp } from './pages/register/register';
import Chest from './pages/WorkoutRoutine/chest';
import Back from './pages/WorkoutRoutine/back';
import Abs from './pages/WorkoutRoutine/abs';
import Legs from './pages/WorkoutRoutine/legs';
import Shoulder from './pages/WorkoutRoutine/shoulder';
import Arms from './pages/WorkoutRoutine/arms';
import VegMeal from './pages/Mymeal/vegmeal';
import UserProfile from './components/Profile/userprofile';
import ProtectedRoute from './components/Proute/protectedroute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(user ? true : false);
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path = "/" component={Home}></Route>
        <Route exact path = "/login" component={Login}></Route>
        <Route exact path = "/register" component={SignUp}></Route>
        <ProtectedRoute exact path = "/myworkout" component={Myworkout} isAuthenticated={isAuthenticated}></ProtectedRoute>
        <ProtectedRoute exact path = "/dashboard" component={Dashboard} isAuthenticated={isAuthenticated}></ProtectedRoute>
        <ProtectedRoute exact path = "/gymoptions" component={GymOptions} isAuthenticated={isAuthenticated}></ProtectedRoute>
        <ProtectedRoute exact path = "/cardio-options" component={CardioOptions} isAuthenticated={isAuthenticated}></ProtectedRoute>
        <ProtectedRoute exact path = "/chest" component={Chest} isAuthenticated={isAuthenticated}></ProtectedRoute>
        <ProtectedRoute exact path = "/back" component={Back} isAuthenticated={isAuthenticated}></ProtectedRoute>
        <ProtectedRoute exact path = "/abs" component={Abs} isAuthenticated={isAuthenticated}></ProtectedRoute>
        <ProtectedRoute exact path = "/legs" component={Legs} isAuthenticated={isAuthenticated}></ProtectedRoute>
        <ProtectedRoute exact path = "/shoulder" component={Shoulder} isAuthenticated={isAuthenticated}></ProtectedRoute>
        <ProtectedRoute exact path = "/arms" component={Arms} isAuthenticated={isAuthenticated}></ProtectedRoute>
        <ProtectedRoute exact path = "/user" component={UserProfile} isAuthenticated={isAuthenticated}></ProtectedRoute>
        <ProtectedRoute exact path = "/vegmeal" component={VegMeal} isAuthenticated={isAuthenticated}></ProtectedRoute>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
