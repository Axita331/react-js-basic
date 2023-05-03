const initialState = {
    loading: false,
    data: null,
    error: ''
}

export const CommentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'COMMENTS_REQUEST_STARTED': {
            return {
                loading: true,
                data: null,
                error: ''
            }
        }
        case 'COMMENTS_REQUEST_SUCCESS': {
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        }
        case 'COMMENTS_REQUEST_FAILED': {
            return {
                loading: false,
                data: null,
                error: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
