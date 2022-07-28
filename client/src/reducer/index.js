
const initialState = {
    results: [],
    previousResult1: [],
    previousResult2: [],
}

function rootReducer (state = initialState, action){
    switch(action.type) {
        case "GET_RESULTS":
            return {
                ...state,
                previousResult1: state.results,
                previousResult2: state.previousResult1,
                results: action.payload,
            }
        default: 
        return state
    }
}

export default rootReducer;