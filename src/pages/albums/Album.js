import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useReducer } from 'react'
import { useNavigate } from 'react-router-dom';
import { initialState, UsersReducer } from '../../App';

function Album() {
  const [albumState, dispatch] = useReducer(UsersReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'REQUEST_STARTED' });
    axios.get('https://jsonplaceholder.typicode.com/albums').then((res) => {
      dispatch({ type: 'REQUEST_SUCCESS', payload: res.data });
    }).catch(e => {
      dispatch({ type: 'REQUEST_FAILURE', payload: 'Albums are not currently loading .. Please try again' })
    })
  }, []);

  const loadingUI = useMemo(() => {
    return (
      <div>Loading albums ...</div>
    )
  }, []);

  const errorUI = useMemo(() => {
    return (
      <div>{albumState.error}</div>
    )
  }, [albumState.error])

  const navigateToPhotos = useCallback((albumId) => {
    navigate(`/albums/${albumId}/photos`);
  }, [navigate]);

  const tableUI = useMemo(() => {
    return (
      <table className='table table-stripped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            albumState?.data?.map((album) => {
              return (
                <tr key={album.id}>
                  <td>{album.id}</td>
                  <td>{album.title}</td>
                  <td>
                    <button className='btn btn-link' onClick={() => navigateToPhotos(album.id)}>View Photos</button>
                  </td>
                </tr>
              )

            })
          }

        </tbody>
      </table>
    )
  }, [albumState.data, navigateToPhotos]);
  
  return (
    <div>
      {
        albumState.loading ? loadingUI :
          albumState.error ? errorUI :
            albumState.data && albumState.data.length > 0 ?
              tableUI : null
      }
    </div>
  )
}

export default Album