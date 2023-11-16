import { createSlice } from "@reduxjs/toolkit";

const initialStateValue =false;

export const userStatusSlice  = createSlice({
    name: "userStatus",
    initialState:{value:initialStateValue},
    reducers: {
        userStatus: (state, action) => {
        console.log(action.payload)
            state.value = action.payload;
        }
    }
});


export const {userStatus}=userStatusSlice.actions;

export default userStatusSlice.reducer;