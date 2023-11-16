import { createSlice } from "@reduxjs/toolkit";

const initialStateValue ="#f6f8";

export const themeSlice  = createSlice({
    name: "theme",
    initialState:{value:initialStateValue},
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload;
        }
    }
});


export const {changeColor}=themeSlice.actions;

export default themeSlice.reducer;
