import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./firebase/Login";
import Register from "./firebase/Register";
import Reset from "./firebase/Reset";
import Dashboard from "./firebase/Dashboard";
import Homepage from './navbarpage/Homepage/Homepage';
import About from './navbarpage/About/About';
import Profile from './navbarpage/Profile/Profile';
import  WelcomeUser from './navbarpage/WelcomeUser/WelcomeUser';
import WorkoutEntry from './navbarpage/WorkoutEntry/WorkoutEntry';



function App() {
  return (
    // localhost:3000
    // my-page.com/

    <div>
      <div>
        <Route path='/'>
          <Homepage />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/profile'>
          <Profile/>
        <Route path='/welcome-user'>
          <WelcomeUser />
        </Route>
        <Route path='workout-entry'>
          <WorkoutEntry />
        </Route>
        </Route>

      </div>
      <Router> 
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>

  );
}
export default App;