import Sets from './components/Sets'
import Squats from './components/Squats'
import Calories from './components/Cals'
import Hydration from './components/Hydration'


function App() {
    return(
        <div>
        <h1> Squat Tracker </h1>
        <h2>Here, you can calulate all the squats/sets of squats you do!</h2>
        <Sets/>
        <Squats/>
        <br></br>
        <Calories/>
        <br></br>
        <Hydration/>
        <h2> Thank you for using Squat Tracker! </h2>
        </div>
    );
}

export default App;
