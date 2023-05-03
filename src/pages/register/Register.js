import React, { useState } from 'react'
import Table from '../../components/Table';

const initialState = {
    firstname: '',
    email: '',
    password: ''
}
function Register(props) {
    const [formState, setFormState] = useState(initialState);
    const [mode, setMode] = useState('create');

    const updateForm = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

    const submit = () => {
        console.log(formState);
        if(mode === 'create') {
            props.addUser(formState);
        }
        if(mode === 'edit') {
            props.update(formState);
            setMode('create');
        }
        setFormState(initialState);
    }

    return (
        <div>
            <div>
                <input
                    name={'firstname'}
                    value={formState.firstname}
                    onChange={(event) => updateForm(event)} />
            </div>
            <div>
                <input
                    name={'email'}
                    value={formState.email}
                    onChange={(event) => updateForm(event)}
                    readOnly={mode === 'edit'}/>
            </div>
            <div>
                <input
                    name={'password'}
                    value={formState.password}
                    onChange={(event) => updateForm(event)} />
            </div>
            <div>
                <button onClick={() => submit()}>{mode === 'edit' ? 'Update' : 'Register'}</button>
            </div>
            <br />
            <div>
                {props?.userList && props?.userList?.length > 0 &&
                    <Table
                    userList={props.userList} 
                    deleteUser={(email) => props.delete(email)}
                    mode={mode}
                    editUser={(obj) => {
                        setFormState(obj);
                        setMode('edit');
                    }} />}
            </div>
        </div>
    )
}

export default Register