import { createSlice } from "@reduxjs/toolkit";

const initialStateValue ="#f6f8";
// this component contains the useSlice method that houses the data for each reeducers
export const themeSlice  = createSlice({
    name: "theme",
    initialState:{value:initialStateValue},
    reducers: {
        // change colour method
        changeColor: (state, action) => {
            state.value = action.payload;
        }
    }
});


export const {changeColor}=themeSlice.actions;

export default themeSlice.reducer;
