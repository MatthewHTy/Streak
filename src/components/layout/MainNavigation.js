import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
// import React from 'react';

function MainNavigation() {
    return (<header className={classes.header}> 
        <div><Link to ="/streak">Streak</Link></div>
       
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>Plans</Link></li>
                <li><Link to='/workout-entry'>Entries</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        </nav>
    </header>
    )
};
export default MainNavigation;

