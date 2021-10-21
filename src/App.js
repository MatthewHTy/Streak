import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./firebase/Login";
import Register from "./firebase/Register";
import Reset from "./firebase/Reset";
import Dashboard from "./firebase/Dashboard";
import HomeNavigation from "./components/HomeNavigation/HomeNavigation";
import Profile from "./components/Profile/Profile";
function App() {
  return (

    <div>
      <Router>
        <Switch>
          <Route exact path="">
            <HomeNavigation />
          </Route>
          <Route exact path="">
            <Profile />
          </Route>
        </Switch>
      </Router>
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