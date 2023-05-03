import { applyMiddleware, combineReducers, createStore } from "redux";
import { CommentsReducer } from "./redux/comments/comments.reducer";
import { CounterReducer } from "./redux/counter/couter.reducer";
import { RegisterReducer } from "./redux/register/register.reducer";
import thunk from 'redux-thunk';
import { PhotosReducer } from "./redux/photos/photos.reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "../saga/rootsaga";
import { TodosReducer } from "./redux/todos/todos.reducer";

const sagaConfig = createSagaMiddleware();

const combinedReducer = combineReducers({
    counterReducer: CounterReducer,
    registerReducer: RegisterReducer,
    commentsReducer: CommentsReducer,
    photosReducer: PhotosReducer,
    todosReducer: TodosReducer
});

export const rootStore = createStore(combinedReducer, applyMiddleware(thunk, sagaConfig));
sagaConfig.run(rootSaga);

// UI -> store -> saga -> reducer
// UI-> store -> thunk -> reducer
// UI -> store -> reducer