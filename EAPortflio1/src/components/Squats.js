import React, {useState} from 'react';

//Squats Function
function Squats () {
    const [squats, setSquats] = useState(0);

    return (
        <div>
            <h2>Total Squats: {squats}</h2>
            <button onClick={() => setSquats(squats +1)}>Add a Squat</button>
            <button onClick={() => setSquats(0)}>Reset</button>
        </div>
    )
}

export default Squats;