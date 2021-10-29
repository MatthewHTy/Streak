// import Dashboard from "../../../firebase/Dashboard"; 

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, gituser } from "../../../firebase/firebase";
import './Profile.css'

function Profile() {

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
      <div className="profile-title">
      <h3 className="text"> </h3>
      <div className="profile-title-text">
          <h1>{userdata.name}</h1>

<div className="streak-title">
<h3 className="text"> </h3>
      </div>
<div className="streak-title-text">
    <h1>Current Streak: {userdata.streak}</h1>
      </div>
      <div className="streak-title-text-2">
    <h1>Previous High Score: {}</h1>
      </div>
      <div className="streak-title-text-3">
    <h1>Exercise for Today: {}</h1>
      </div>

      </div>
      </div>
    )
};

export default Profile;