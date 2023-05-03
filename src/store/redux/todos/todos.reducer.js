const initialState = {
    loading: false,
    data: null,
    error: ''
};

export const TodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TODOS_STARTED': {
            console.log('inside reducer start');
            return {
                ...state,
                loading: true,
                data: null,
                error: ''
            };
        }
        case 'TODOS_SUCCESS': {
            console.log('inside reducer success');
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            };
        }
        case 'TODOS_FAILURE': {
            console.log('inside reducer failure');
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            };
        }
        default: {
            return state;
        }
    }
}