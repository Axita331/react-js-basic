import axios from 'axios';
import React, { Fragment, useCallback, useEffect, useMemo, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { initialState, UsersReducer } from '../../App';

function Photos() {
    const params = useParams();
    const [photoState, dispatch] = useReducer(UsersReducer, initialState);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: 'REQUEST_STARTED' });
        axios(`https://jsonplaceholder.typicode.com/albums/${params.id}/photos`).then(res => {
            dispatch({ type: 'REQUEST_SUCCESS', payload: res.data });
        }).catch(e => {
            dispatch({ type: 'REQUEST_FAILURE', payload: 'Photos failed to load' });
        })
    }, [params?.id]);

    const loadingUI = useMemo(() => {
        return (
            <div>Loading albums ...</div>
        )
    }, []);

    const errorUI = useMemo(() => {
        return (
            <div>{photoState.error}</div>
        )
    }, [photoState.error])

    const photoCard = (photo) => {
        return (
            <div className="card" style={{ width: '12rem' }}>
                <img src={photo.thumbnailUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Photo Ref - {photo.id}</h5>
                    <p className="card-text">{photo.title}</p>
                </div>
            </div>
        )
    }

    const photoCards = useMemo(() => {
        return (
            <div className='column-photo'>
                {
                    photoState?.data?.map((photo) => {
                        return (
                            <Fragment key={photo.id}>
                                {photoCard(photo)}
                            </Fragment>
                        )
                    })
                }
            </div>
        )
    }, [photoState.data]);

    const navigateToAlbums = useCallback(() => {
        navigate('/albums');
    }, [navigate])

    return (
        <div>
            <button className='btn btn-link' onClick={() => navigateToAlbums()}>Back</button>
            {
                photoState.loading ? loadingUI :
                    photoState.error ? errorUI :
                        photoState.data && photoState.data.length ? photoCards : null
            }
        </div>
    )
}

export default Photos