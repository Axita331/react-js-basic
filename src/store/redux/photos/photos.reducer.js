const initialState = {
    loading: false,
    error: '',
    data: null
}
export const PhotosReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PHOTOS_REQUEST_STARTED': {
            return {
                loading: true,
                data: null,
                error: ''
            }
        }
        case 'PHOTOS_REQUEST_SUCCESS': {
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        }
        case 'PHOTOS_REQUEST_FAILED': {
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

export const getPhotosSelector = (state) => state.photosReducer;
export const getPhotosLodingSelector = (state) => state.photosReducer.loading;
export const getPhotosDataSelector = (state) => state.photosReducer.data;
export const getPhotosErrorSelector = (state) => state.photosReducer.error;