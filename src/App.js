import './App.css';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import CounterConnect from './connect/counter/Counter.connect';
import RegisterConnect from './connect/register/register.connect';
import Nav from './components/Nav';
import CommentsConnect from './connect/comments/Comments.connect';
import Photos from './pages/photos/Photos';
import Todos from './pages/todos/Todos.page';

function App() {
  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route path='counter' element={<CounterConnect />}></Route>
        <Route path='register' element={<RegisterConnect />}></Route>
        <Route path='comments' element={<CommentsConnect />} />
        <Route path='photos' element={<Photos />} />
        <Route path='todos' element={<Todos />} />
      </Routes>
    </Fragment>
  );
}

export default App;
