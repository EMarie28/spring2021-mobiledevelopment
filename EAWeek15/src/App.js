import React, {useReducer} from 'react';
import Sets from './components/Sets'
import Squats from './components/Squats'
import {state, reducer} from "./components/ApplicationState";


function App() {

const [currentState, dispatch] = useReducer(reducer, state);

    return(
        <div>
        <h1> Squat Tracker </h1>
        <h2>Here, you can calulate all the squats/sets of squats you do!</h2>
        <Sets state={currentState} dispatch={dispatch}/>
        <Squats state={currentState} dispatch={dispatch}/>
        <h2> Thank you for using Squat Tracker! </h2>
        </div>
    );
}

export default App;