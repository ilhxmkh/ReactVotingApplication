import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    connectMeta: null,
    

}


const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        connectMeta: (state,action) => {
           state.connectMeta = action.payload
        },

        logout: (state)=> {
            state.status = false
            state.userData = null 
        }
    }
})

export const {connectMeta,logout} = authSlice.actions

export default authSlice;