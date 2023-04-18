import axios from 'axios';
import React, { memo, useCallback, useEffect, useMemo, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { initialState, UsersReducer } from '../../App';

function Users() {

  const [userState, dispatch] = useReducer(UsersReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'REQUEST_STARTED' })
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      dispatch({ type: 'REQUEST_SUCCESS', payload: res.data });
    }).catch(() => {
      dispatch({ type: 'REQUEST_FAILURE', payload: 'Something went wrong' });
    })
  }, []);

  const navigateToUser = useCallback((id) => {
    navigate(`/users/${id}`);
  }, [navigate]);

  const loadingUI = useMemo(() => {
    return (
      <div>Loading ....</div>
    )
  }, []);

  const errorUI = useMemo(() => {
    return (
      <p>{userState.error}</p>
    )
  }, [userState.error]);

  const tableUI = useMemo(() => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            userState.data?.map((obj, index) => {
              return (
                <tr key={obj.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{obj.name}</td>
                  <td>{obj.username}</td>
                  <td>{obj.email}</td>
                  <td>
                    <button className='btn btn-link' onClick={() => navigateToUser(obj.id)}>View More</button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    )
  }, [userState.data, navigateToUser]);
  return (
    <div>
      {
        userState.loading ? loadingUI :
          userState.error ? errorUI :
            userState.data ? tableUI : null
      }
    </div>
  )
}

export default memo(Users)