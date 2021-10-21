import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./firebase/Login";
import Register from "./firebase/Register";
import Reset from "./firebase/Reset";
import Dashboard from "./firebase/Dashboard";
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
        <Route path=''>

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