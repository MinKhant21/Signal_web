import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name : 'chat',
    initialState : {
        user : null,
        messages : [],
        done : false,
        message:''
    },
    reducers:{
        setInfo : (state,actions) => {
            state.user = actions.payload
        },
        setMessages : (state,actions) => {
            state.messages = actions.payload
        },
        setMessage : (state , actions) => {
            state.message = actions.payload
        },
        setMessageClaer : (state , actions) => {
            state.message = ""
        }
    }
})

export const {setInfo,setMessages,setMessageClaer,setMessage} = chatSlice.actions

export default chatSlice.reducer
