let state = {
    sets: 0,
    squats: 0
};

function reducer(state, action) {
    switch (action.type) {
        case "increment1":
            return { sets: state.sets + 1, squats: state.squats};
        case "increment2":
                return { sets: state.sets, squats: state.squats + 1};
        case "decrement1":
            return { sets: state.sets - 1, squats: state.squats};
        case "decrement2":
                return { sets: state.sets, squats: state.squats -1};
        default:
            throw new Error();
    }
}
export {state, reducer};