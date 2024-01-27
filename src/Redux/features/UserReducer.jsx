import { createSlice } from "@reduxjs/toolkit";
import data2 from "./data2.json"

// this component contains the useSlice method that houses the data for each reeducers
const userSliceTut2 = createSlice({
    name:"userTut2",
    initialState:data2,
    reducers:{
        // add user method
        addUser: (state, action)=>{
           state.push(action.payload)
        },
        // update user method
        updateUser:(state,action)=>{
            const {id,name,email}=action.payload
            const nState =state
            const uu = nState.find(user => user.id== id);
            if(uu){
                uu.name=name
                uu.email=email
            }
           
        },
        // delete user method
        deleteUser: (state, action) => {
            const { id } = action.payload;
            const nState = state
            const uu = nState.find(user => user.id == id);
          
            if (uu) {
              // If user is found, return the updated state without the deleted user
              return nState.filter(f =>f.id !== id );
             
            }
          
            // If user is not found, return the current state unchanged
            return nState;
          }
    }
})

export const {addUser,updateUser,deleteUser}= userSliceTut2.actions
export default userSliceTut2.reducer;