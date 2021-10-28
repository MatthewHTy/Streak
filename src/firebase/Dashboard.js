import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import { auth, gituser, logout } from "./firebase";
function Dashboard() {
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
    <div className="dashboard">
      <div className="dashboard__container">
        Logged in as
        <div>{userdata.name}</div>
        <div>{userdata.email}</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;