import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : 'chat',
    initialState : {
        phoneNumber : "",
        Name : "",
    },
    reducers:{
        setInfo : (state,actions) => {
            state.phoneNumber = actions.payload
        },
        getInfo : (state) => {
            console.log(state)
        }
    }
})

export const {setInfo,getInfo} = chatSlice.actions

export default chatSlice.reducer
