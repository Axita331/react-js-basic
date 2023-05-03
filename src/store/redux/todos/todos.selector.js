export const loadingSelector = (rootState) => rootState.todosReducer.loading; 
export const dataSelector = (rootState) => rootState.todosReducer.data; 
export const errorSelector = (rootState) => rootState.todosReducer.error; 