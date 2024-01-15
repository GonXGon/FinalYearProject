import React, { useState, useEffect } from 'react';
import { Button1, Button2, Myworkout, Mymeal } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import UserProfile from '../Profile/userprofile';
import { auth } from '../firebaseConfig/firebaseConfig';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(user ? true : false);
    });
    return unsubscribe;
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            GymWeb
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
          </ul>

          {isLoggedIn  && <Myworkout buttonStyle='btn--outline'>Workouts</Myworkout>}
          {isLoggedIn  && <Mymeal buttonStyle='btn--outline'>Meal</Mymeal>}
          {isLoggedIn || <Button1 buttonStyle='btn--outline'>Join Now</Button1>}
          {isLoggedIn || <Button2 buttonStyle='btn--outline'>Log In</Button2>}
          {button && <UserProfile buttonStyle='btn--outline'></UserProfile>}
           
        </div>
      </nav>
    </>
  );
}

export default Navbar;
