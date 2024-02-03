import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:{
            username: null,
        },
    },
    reducers: {
        login: (state, action) => {
            state.user.username = action.payload.username;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
// The function below is called a selector. It selects the value of the `value` key
export const selectUser = (state) => state.user.user.username;
export default userSlice.reducer;
