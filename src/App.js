import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./firebase/Login";
import Register from "./firebase/Register";
import Reset from "./firebase/Reset";
import Dashboard from "./firebase/Dashboard";
import Homepage from './components/pages/Homepage/Homepage';
import About from './components/pages/About/About';
import WorkoutEntry from './components/pages/WorkoutEntry/WorkoutEntry';
import Profile from './components/pages/Profile/Profile';
import MainNavigation from './components/layout/MainNavigation';
import Streak from './components/pages/Streak/Streak'


function App() {
  return (
    // localhost:3000
    // my-page.com/
//  NavBar
        <div className="firebase">
        <div className="navbar">
      
        <MainNavigation />
        <Switch>
        <Route path="/streak" exact>
          <Streak />
        </Route>
        </Switch>
        <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/workout-entry' exact>
          <WorkoutEntry />
        </Route>
        <Route path='/profile' exact>
          <Profile/>
        </Route>
        </Switch>

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
    // Firebase

  );
}
export default App;