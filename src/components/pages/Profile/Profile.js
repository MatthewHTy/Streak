// import Dashboard from "../../../firebase/Dashboard"; 

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth, gituser } from "../../../firebase/firebase";

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
    <div>
        <h1>Profile</h1>
        {/* <Dashboard /> */}
    </div>
    )
};

export default Profile;