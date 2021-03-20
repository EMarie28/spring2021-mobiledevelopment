import React, {useState} from 'react';

function Cals () {
    const [cals, setCals] = useState(0);

    return (
        <div>
            <h1>Burned Calorie Counter</h1>
            <h2>Count how much calories you've burned!</h2>
            <h2>Calories Burned: {cals}</h2>
            <button onClick={() => setCals(cals + 1)}>Burned</button>
            <button onClick={() => setCals(0)}>Reset</button>
        </div>
    )
}

export default Cals;