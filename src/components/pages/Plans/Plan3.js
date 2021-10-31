import './Plan3.css';
import React from 'react';

export default class Plans extends React.Component {

    state = {
        loading: true,
        exercise: null
    };
    
    async componentDidMount() {
        const url = "https://wger.de/api/v2/exercisecategory/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({ exercise: data.results[5], loading: false });
    }
    
    render() {
        if (this.state.loading) {
            return <div className="retrieving-workout-plan-3">Retrieving Workout Plan...</div>;
        }
        
        if (!this.state.exercise) {
            return <div>No Workouts</div>;
        }
        
        return (
            <div className="workout-list-3">
          <div>{this.state.exercise.name}</div>
        </div>
      );
    }

    state = {
        loading: true,
        exercise: null
    };

    

}