import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./firebase/Login";
import Register from "./firebase/Register";
import Reset from "./firebase/Reset";
import Dashboard from "./firebase/Dashboard";
import Homepage from './components/pages/Homepage/Homepage';
import About from './components/pages/About/About';
import Profile from './components/pages/Profile/Profile';
import WorkoutEntry from './components/pages/WorkoutEntry/WorkoutEntry';
import MainNavigation from './components/MainNavigation';


function App() {
  return (
    // localhost:3000
    // my-page.com/
//  NavBar
    <div>
      <div>
        <ul>

        <MainNavigation />
        <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/profile' exact>
          <Profile/>
        <Route path='workout-entry' exact>
          <WorkoutEntry />
        </Route>
        </Route>
        </Switch>

        </ul>
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