//  api test
import React from 'react';

export default class Plans extends React.Component {

    state = {
        loading: true,
        exercise: null
    };
    
    async componentDidMount() {
        const url = "https://my-workout-api.herokuapp.com/results/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({ exercise: data.results, loading: false });
    }
    
    render() {
        if (this.state.loading) {
            return <div className="retrieving-workout-plan">Retrieving Workout Plan...</div>;
        }
        
        if (!this.state.exercise) {
            return <div>No Workouts</div>;
        }
        
        return (
            <div className="workout-list">
            <div>{this.state.exercise.name}</div>
          </div>
      );
    }

    state = {
        loading: true,
        exercise: null
    };

    

}