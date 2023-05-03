import axios from "axios"

export const getPhotos = (dispatch) => {
    dispatch({ type: 'PHOTOS_REQUEST_STARTED' });
    axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then((res) => {
        dispatch({ type: 'PHOTOS_REQUEST_SUCCESS', payload: res.data });
    }).catch((e) => {
        dispatch({ type: 'PHOTOS_REQUEST_FAILED', payload: 'Something went wrong' });
    });
}