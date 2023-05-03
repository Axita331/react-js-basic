import { connect } from "react-redux"
import Register from "../../pages/register/Register"

const mapStateToProps = (rootState) => {
    console.log(rootState.registerReducer);
    return {
        userList: [
            ...rootState.registerReducer.usersList
        ]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch({type: 'ADD_USER', payload: user}),
        update: (user) => dispatch({type: 'UPDATE_USER', payload: user}),
        delete: (email) => dispatch({type: 'DELETE_USER', payload: email}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);