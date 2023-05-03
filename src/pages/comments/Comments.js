import React, { useMemo } from 'react'

function Comments(props) {

  const loadingUI = useMemo(() => {
    return (
      <p>Loading ...</p>
    )
  }, [])
  const errorUI = useMemo(() => {
    return (
      <p>{props.error}</p>
    )
  }, [props.error]);

  const tableUI = useMemo(() => {
    return (
      <table className='table table-stripped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {
            (props.data && props.data.length > 0) && props.data.map((comment) => {
              return (
                <tr key={comment.id}>
                  <th>{comment.name}</th>
                  <th>{comment.email}</th>
                  <th>{comment.body}</th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }, [props.data]);
  
  return (
    <div>
      <button onClick={() => props.getCommentsAPI()}>Get Comments</button>
      {
        props.loading ? loadingUI :
          props.error ? errorUI :
            props.data ? tableUI : null
      }
    </div>
  )
}

export default Comments;