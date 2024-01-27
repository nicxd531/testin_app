import { createSlice } from "@reduxjs/toolkit";
// this component contains the useSlice method that houses the data for each reeducers
const initialStateValue = {value:{name: "", age: 0,email: ""}}
export const userSlice = createSlice({
    name: "user",
    initialState:initialStateValue,
    reducers: {
        // login method
        login: (state, action) => {
            
            state.value = action.payload;
        },
        // logout method
        logout:(state)=>{
            state.value = initialStateValue
        }
        
    }
});

export const {login,logout}=userSlice.actions;

export default userSlice.reducer;
