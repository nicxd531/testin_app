import { createSlice } from "@reduxjs/toolkit";

const initialStateValue =false;
// this component contains the useSlice method that houses the data for each reeducers
export const userStatusSlice  = createSlice({
    name: "userStatus",
    initialState:{value:initialStateValue},
    reducers: {
        // set user status method
        userStatus: (state, action) => {
            state.value = action.payload;
        }
    }
});


export const {userStatus}=userStatusSlice.actions;

export default userStatusSlice.reducer;