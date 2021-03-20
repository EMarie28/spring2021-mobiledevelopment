import React, {useState} from 'react';

function Hydration () {
    const [Hydration, setCups] = useState(0);

    return (
        <div>
            <h1>Hydration Counter</h1>
            <h2>Count how many cups of water you had today!</h2>
            <h3>Be sure to stay hydrated while working out.</h3>
            <h2>Cups: {Hydration}</h2>
            <button onClick={() => setCups(Hydration + 1)}>Add a Drink</button>
            <button onClick={() => setCups(0)}>Reset</button>
        </div>
    )
}

export default Hydration;