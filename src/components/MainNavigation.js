import { Link } from 'react-router-dom'

// import classes from './components/MainNavigation.css';


function MainNavigation() {
    return <header>

        <div>Streak</div>
        <nav>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/workout-entry'>Entry</Link>
            </ul>
        </nav>
    </header>
};
export default MainNavigation;

