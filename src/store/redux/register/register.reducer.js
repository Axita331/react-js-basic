const initialState = {
    usersList: []
};

export const RegisterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER': {

            const arr = state.usersList;
            const index = state.usersList.findIndex(obj => obj.email === action.payload.email);
            console.log(index);
            if (index === -1) {
                arr.push(action.payload);
                return  {
                    ...state,
                    usersList: arr
                }
            }
            return state;
        }
        case 'UPDATE_USER': {
            const index = state.usersList.findIndex(obj => obj.email === action.payload.email);
            if(index !== -1) {
                const userList = state.usersList;
                userList[index] = action.payload;
                return {
                    ...state,
                    userList: userList
                }
            }
            return {
                ...state
            };
        }
        case 'DELETE_USER': {
            const index = state.usersList.findIndex(obj => obj.email === action.payload);
            if(index !== -1) {
                const userList = state.usersList;
                userList.splice(index, 1);
                return {
                    ...state,
                    userList: userList
                }
            }
            return {
                ...state
            };
        }
        default: {
            return state;
        }
    }
}