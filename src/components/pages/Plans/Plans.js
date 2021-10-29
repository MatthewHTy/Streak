import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { auth, gituser } from '../../../firebase/firebase';
import './Plans.css';

function Plans() {

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
        <div className="plans-title">
        <h3 className="text"> </h3>
        <div className="plans-title-text">
            <h1>Workout Plans</h1>
        </div>
        </div>
    )
}

export default Plans