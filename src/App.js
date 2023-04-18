import './App.css';
import { Route, Routes } from 'react-router-dom';
import Users from './pages/users/Users';
import Album from './pages/albums/Album';
import { Fragment } from 'react';
import Nav from './components/Nav';
import User from './pages/users/user/User';
import Photos from './pages/albums/Photos';

export const initialState = {
  loading: false,
  data: null,
  error: null
}
export const UsersReducer = (state, action) => {
  switch (action.type) {
    case 'REQUEST_STARTED': {
      return {
        ...state,
        loading: true,
        data: null,
        error: null
      }
    }
    case 'REQUEST_SUCCESS': {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }
    }
    case 'REQUEST_FAILURE': {
      return {
        ...state,
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
function App() {
  return (
    <Fragment>
      <Nav />
      <div className='container mt-3'>
        <Routes>
          <Route path='' element={<Users />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<User />} />
          <Route path='/albums' element={<Album />} />
          <Route path='/albums/:id/photos' element={<Photos />}/>
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
