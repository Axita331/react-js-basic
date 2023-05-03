import React from 'react'

function Table(props) {

    const onDeleteHandler = (email) => {
        const confirmation = window.confirm('Are you sure ? Do you want to delete this record');
        if (confirmation) {
            props.deleteUser(email);
        }
    }

    const onEditDetails = (obj) => {
        props.editUser(obj);
    }
    return (
        <div>
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.userList.map((obj, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{obj.firstname}</td>
                                <td>{obj.email}</td>
                                <td>{obj.password}</td>
                                <td>
                                    <button className='btn btn-link' onClick={() => onEditDetails(obj)}>Edit</button>
                                    <button className='btn btn-link'
                                        onClick={() => onDeleteHandler(obj.email)}
                                        disabled={props.mode === 'edit'}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table