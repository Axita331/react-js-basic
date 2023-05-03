import { all } from "redux-saga/effects";
import { todosSaga } from "./todos/todos.saga";

export function* rootSaga() {
    return yield todosSaga()
}

