import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : 'chat',
    initialState : {
        user : null,
        messages : []
    },
    reducers:{
        setInfo : (state,actions) => {
            state.user = actions.payload
        },
        setMessages : (state,actions) => {
            state.messages = actions.payload
        }
    }
})

export const {setInfo,setMessages} = chatSlice.actions

export default chatSlice.reducer
