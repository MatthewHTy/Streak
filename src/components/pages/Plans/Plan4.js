// Upper
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router';
import { auth, gituser } from '../../../firebase/firebase';
import './Plan4.css';

function Plan4() {

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

        <div className="upper-rectangle">
                <h3 className="text"> </h3>
            </div>
            <div className="upper-strength">
                <h3 className="text">Upper Strength</h3>
            </div>
                <div className="lower-rectangle">
                <h1 className="text"> </h1>
            </div>
            <div className="lower-strength">
                <h3 className="text">Lower Strength</h3>
            </div>
        </div>
        
    )
}

export default Plan4
