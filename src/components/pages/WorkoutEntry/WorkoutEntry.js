import React from 'react';






class WorkoutEntry extends React.Component {

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
                <div>loading...</div> 
                ) : (    
                <div>
                    <div>{this.state.exercise.name}</div>
                </div>
        )}
        </div>
        );
    }    
}
    export default WorkoutEntry;
    
    