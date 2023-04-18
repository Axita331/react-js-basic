import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { initialState, UsersReducer } from '../../../App';

function User() {
    const params = useParams();
    const [userState, dispatch] = useReducer(UsersReducer, initialState);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: 'REQUEST_STARTED' });
        axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`).then((res) => {
            dispatch({ type: 'REQUEST_SUCCESS', payload: res.data });
        }).catch((e) => {
            dispatch({ type: 'REQUEST_FAILURE', payload: 'Unable to fetch user details' });
        })
    }, [params.id]);

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

    const navigateToUserList = useCallback(() => {
        navigate('/users');
    }, [navigate]);
    const userUI = useMemo(() => {
        return (
            <React.Fragment>
                <div>
                    <button className='btn btn-link' onClick={() => navigateToUserList()}>Back</button>
                </div>
                <div className='d-flex gap-15'>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Personal Details</h5>
                        <p className="card-text">Username - {userState.data?.username}</p>
                        <p className="card-text">Name - {userState.data?.name}</p>
                        <p className="card-text">Email - {userState.data?.email}</p>
                        <p className="card-text">Phone - {userState.data?.phone}</p>
                        <p className="card-text">Website - {userState.data?.website}</p>

                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Address Details</h5>
                        <p className="card-text">Street - {userState.data?.address?.street}</p>
                        <p className="card-text">City - {userState.data?.address?.city}</p>
                        <p className="card-text">zipcode - {userState.data?.address?.zipcode}</p>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Company Details</h5>
                        <p className="card-text">Name - {userState.data?.company?.name}</p>
                        <p className="card-text">Catch Phrase - {userState.data?.company?.catchPhrase}</p>
                        <p className="card-text">BS - {userState.data?.company?.bs}</p>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }, [userState.data, navigateToUserList])
    return (
        <div>
            {
                userState.loading ? loadingUI :
                    userState.error ? errorUI :
                        userState.data ? userUI : null
            }
        </div>
    )
}

export default User