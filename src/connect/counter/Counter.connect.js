import { connect } from "react-redux"
import Counter from "../../pages/counter/Counter";

const mapStateToProps = (rootState) => {
    console.log('Im inside the state to props of connect', rootState);
    return {
        counter: rootState.counterReducer.counter,
        users: [
            ...rootState.registerReducer.usersList
        ]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            console.log('increment inside connect');
            dispatch({type: 'INCREMENT'})
        },
        decrement: () => dispatch({type: 'DECREMENT'}),
        reset: () => dispatch({type: 'RESET'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);