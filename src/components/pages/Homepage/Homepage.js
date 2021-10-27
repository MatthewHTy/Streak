import React from 'react'
import './Homepage.css'


    const Homepage = () => {

        return (
            <h1>
            <div className="streak-text">
            <div className="streak-image">
                <img className="streak-photo" src="./images/streak.png" alt="Streak"/>
            </div>
            <div class="rectangle">
                <h3 class="text"> </h3>
            </div>
            <div class="welcome-to-streak">
                <h3 class="text"> Welcome to Streak </h3>

            <div class="rectangle-2">
                <h3 class="text"> </h3>
            </div>
            <div class="what-is-streak">
                <h3 class="text">How It Works</h3>
            </div>
            <div class="rectangle-how">
                <h3 class="text"> </h3>
            </div>
            <div class="what-is-streak-how">
                <p class="text"><ul>
                    <li>Register/Log-In</li>
                    <li>Retreive Workout Plan</li>
                    <li>Add Workout Entries</li>
                    <li>Start your tracker!</li>
                </ul>
                </p>
            </div>
            <div class="rectangle-3">
                <h3 class="text"> </h3>
            </div>
            <div class="what-is-streak-p">
                <h2 class="text">Streak's Goal</h2>
            </div>
            </div>
            </div>
        </h1>
        
    );
}   
export default Homepage;
