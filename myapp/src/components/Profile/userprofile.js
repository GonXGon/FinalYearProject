import './profile.css';
import React, { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig/firebaseConfig';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail(null);
            }
        });
        return unsubscribe;
    }, []);
    const handleLogout = () => {
        auth.signOut();
    }

    if (!userEmail) {
        return null;
    }

    return (
        <div class="dropdown">
            <button class="btn--primary btn--outline btn--medium">{userEmail}</button>
            <div class="dropdown-content">
                <Link to="/dashboard">Profile</Link>
                <Link onClick={handleLogout}>Logout</Link>
            </div>

        </div>
    );
}

export default UserProfile;
