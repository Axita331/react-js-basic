import axios from "axios";
import { call, put, take, takeEvery } from "redux-saga/effects";

async function getApi() {
    return await axios.get('https://jsonplaceholder.typicode.com/todos');
}
function* fecthCall() {
    try {
        yield put({type: 'TODOS_STARTED'});
        const result = yield call(getApi);
        console.log(result);
        yield put({type: 'TODOS_SUCCESS', payload: result.data});
    } catch(e) {
        console.log('error');
        yield put({type: 'TODOS_FAILURE', payload: 'Something went wrong'});
    }
    return;
}
export function* todosSaga() {
    return yield take('GET_TODOS', fecthCall);
}