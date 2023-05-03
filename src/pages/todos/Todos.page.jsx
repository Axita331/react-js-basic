import React from 'react'
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { dataSelector, errorSelector, loadingSelector } from '../../store/redux/todos/todos.selector';

function Todos() {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const data = useSelector(dataSelector);
  const error = useSelector(errorSelector);

  const loadingUI = useMemo(() => {
    return (
      <p>Loading ...</p>
    )
  }, [])

  const errorUI = useMemo(() => {
    return (
      <p>{error}</p>
    )
  }, [error])

  const tableUI = useMemo(() => {
    return (
      <table className="table table-stripped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Completed</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((obj, index) => {
            return (
              <tr key={obj.id}>
                <th scope="row">{index + 1}</th>
                <td>{obj.id}</td>
                <td>{obj.title}</td>
                <td>{obj.completed ? 'Inactive' : 'Active'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }, [data]);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'GET_TODOS' })}>Get todos from saga action</button>
      {
        loading ? loadingUI :
          error ? errorUI :
            data && data.length > 0 ? tableUI : null
      }
    </div>
  )
}

export default Todos