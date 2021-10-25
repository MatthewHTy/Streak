import { Link } from 'react-router-dom'

// import classes from './components/MainNavigation.css';


function MainNavigation() {
    return <header>
        <div><Link to ="/streak">Streak</Link></div>
       
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/workoutentry'>Entries</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        </nav>
    </header>
};
export default MainNavigation;

