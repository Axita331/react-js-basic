const initialState = {
    counter: 0
}
export const CounterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT' : {
            console.log('inside increment reducer');
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case 'DECREMENT': {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case 'RESET': {
            return {
                ...state,
                counter: 0
            }
        }
        default: {
            return state;
        }
    }
}