import axios from "axios"

export const getComments = (dispatch) => {
    dispatch({ type: 'COMMENTS_REQUEST_STARTED' });
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
        dispatch({ type: 'COMMENTS_REQUEST_SUCCESS', payload: res.data });
    }).catch((e) => {
        dispatch({ type: 'COMMENTS_REQUEST_FAILED', payload: 'Something went wrong' });
    });
}