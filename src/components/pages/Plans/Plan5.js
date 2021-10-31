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
        
        if (!this.state.results) {
            return <div>No Workouts</div>;
        }
        
        return (
            <div className="workout-list">
         <div id='workout_list'>{this.state.results.map(result => {
             return <p>{result.results}</p>} )}</div>
       </div>
      );
    }

    state = {
        loading: true,
        exercise: null
    };

    

}