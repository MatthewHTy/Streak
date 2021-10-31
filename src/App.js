import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./firebase/Login";
import Register from "./firebase/Register";
import Reset from "./firebase/Reset";
import Dashboard from "./firebase/Dashboard";
import Homepage from './components/pages/Homepage/Homepage';
import Plans from './components/pages/Plans/Plans';
import WorkoutEntry from './components/pages/WorkoutEntry/WorkoutEntry';
import Profile from './components/pages/Profile/Profile';
import MainNavigation from './components/layout/MainNavigation';
import Streak from './components/pages/Streak/Streak';
import Plan2 from './components/pages/Plans/Plan2';
import TodoList from './components/TodoList'
import Plan3 from './components/pages/Plans/Plan3';
import Plan4 from './components/pages/Plans/Plan4';
import Plan5 from './components/pages/Plans/Plan5';


function App() {
  return (

        <div className="navbar">
        <div className="firebase">
      
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
        <Route path='/plans' exact>
          <Plans />
          <Plan2 />
          <Plan3 />
          <Plan4 />
          <Plan5 />
        </Route>
        <Route path='/workout-entry' exact>
          <WorkoutEntry />
          <TodoList />
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