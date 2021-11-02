import React, { useEffect } from 'react';
import './Streak.css'
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { auth, gituser, setStreak } from '../../../firebase/firebase';


function Streak () {

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
    <div>

<div className="streak-image">
                <img className="streak-photo2" src="./images/streak.png" alt="Streak"/>
            </div>

            <div className="streak-rectangle">
                <h3 className="text"> </h3>
            </div>

    <div className="streak-counter-btn">
        {
          // if else statement to determine color of the counter
        }
        <div className="streak-counter-display">
                <h3 className="text"> </h3>
            </div>
        <h1 className="streak--title">{userdata.name}'s Streak</h1>

        <div className="number-display">
        <h1 className={userdata.streak > 0 ? "positive" : userdata.streak < 0 ? "negative" : null}>
          {userdata.streak}</h1>
        </div>

        <div className="button__wrapper">
          <button onClick={() => {
            setStreak(userdata, -1)
            gituserdata()
          }}>-</button>

          <button onClick={() => {
            setStreak(userdata, 1)
            gituserdata()
          }}>+</button>
        <div className="streak-counter-display-2">
                <h3 className="text"> </h3>
            </div>
        </div>
      </div>
      </div>
    );
  }
 
  
export default Streak;