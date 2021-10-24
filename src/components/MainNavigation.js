import { Link } from 'react-router-dom'

// import classes from './components/MainNavigation.css';


function MainNavigation() {
    return <header>

        <div>Streak</div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/workout-entry'>WorkoutEntry</Link></li>
            </ul>
        </nav>
    </header>
};
export default MainNavigation;

