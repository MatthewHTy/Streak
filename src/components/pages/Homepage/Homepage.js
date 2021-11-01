import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { auth, gituser } from '../../../firebase/firebase';
import './Homepage.css'


    const Homepage = () => {

        const [user, loading] = useAuthState(auth);
        const history = useHistory();
      
        const [userdata, setuserdata] = useState({
          name: 'user',
          email: 'email',
          uid: '0',
          streak: 0,
          entries: [],
          highscore: 0
        })
      
        const gituserdata = async () => {
          setuserdata(await gituser(user)) 
        }
      
        useEffect(() => {
          if (loading) return;
          if (!user) return history.replace("/");
          gituserdata();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [user, loading]);

        return (

            <h1>
            <div className="streak-text">
            <div className="streak-image">
                <img className="streak-photo" src="./images/streak.png" alt="Streak"/>
            </div>
            <div className="rectangle">
                <h3 className="text"> </h3>
            </div>
            <div className="welcome-to-streak">
                <h3 className="text"> Welcome, {userdata.name} </h3>

            <div className="rectangle-2">
                <h3 className="text"> </h3>
            </div>
            <div className="what-is-streak">
                <h3 className="text">How It Works</h3>
            </div>
            <div className="rectangle-how">
                <h3 className="text"> </h3>
            </div>
            <div className="what-is-streak-how">
                <p className="text"><ul>
                    <li>Register/Log-In</li>
                    <li>Retrieve Workout Plan</li>
                    <li>Add Workout Entries</li>
                    <li>Start your tracker!</li>
                </ul>
                </p>
            </div>
            <div className="rectangle-3">
                <h3 className="text"> </h3>
            </div>
            <div className="what-is-streak-p">
                <h2 className="text">Streak's Goal</h2>
            </div>
            <div className="streak-goal">
                <p>Lorem Ipsum</p>
            </div>
            </div>
            </div>
        </h1>
        
    );
}   
export default Homepage;
