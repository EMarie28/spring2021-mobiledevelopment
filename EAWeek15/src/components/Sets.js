import React from 'react'

//Sets Function
function Sets (props) {

    return (
        <div>
            <h2>Total Sets: {props.state.sets}</h2>
            <button onClick={() => props.dispatch({"type": "increment1"})}>Add a Set</button>
            <button onClick={() => props.dispatch({"type": "decrement1"})}>Remove a Set</button>
        </div>
    )
}

export default Sets;