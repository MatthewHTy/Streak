
import './Plans.css';
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
        this.setState({ exercise: data.results[1], loading: false });
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
// function Plans() {

//     const [user, loading] = useAuthState(auth);
//     const history = useHistory();
  
//     const [userdata, setuserdata] = useState({
//       name: 'user',
//       email: 'email',
//       uid: '0',
//       streak: 0,
//       entries: [],
//       highscore: 0
//     })
  
//     const gituserdata = async () => {
//       setuserdata(await gituser(user)) 
//     }
  
//     useEffect(() => {
//       if (loading) return;
//       if (!user) return history.replace("/");
//       gituserdata();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [user, loading]);


//     return (
//         <div className="plans-title">
//         <h3 className="text"> </h3>
//         <div className="plans-title-text">
//             <h1>Workout Plans for {userdata.name}</h1>
//         </div>
//         </div>
//     )
// }

// export default Plans