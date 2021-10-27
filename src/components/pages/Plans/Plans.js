import React from 'react';
import './Plans.css';

class Plans extends React.Component {

    state = {
        loading: true,
        exercise: null
    }
    async componentDidMount() {
        const url ="https://wger.de/api/v2/exercise/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({exercise: data.results[0], loading: false})
    }

    render() {
        return (
        <div>
            {this.state.loading || !this.state.exercise ? (
                <div className="workout-plan-1">
                    <h1>Retreiving Workout Plans...</h1></div> 
                ) : (    
                <div>
                    <div><h1>{this.state.exercise.name}</h1></div>
                </div>
        )}
        </div>
        
            

        );
    }    
}
export default Plans