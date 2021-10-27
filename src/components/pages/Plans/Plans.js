import React from 'react';

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
                <div>Retreiving Workout Plans...</div> 
                ) : (    
                <div>
                    <div>{this.state.exercise.name}</div>
                </div>
        )}
        </div>
        );
    }    
}
export default Plans