import React from 'react';

//Squats Function
function Squats (props) {

    return (
        <div>
            <h2>Total Squats: {props.state.squats}</h2>
            <button onClick={() => props.dispatch({"type": "increment2"})}>Add a Squat</button>
            <button onClick={() => props.dispatch({"type": "decrement2"})}>Remove a Squat</button>
        </div>
    )
}

export default Squats;