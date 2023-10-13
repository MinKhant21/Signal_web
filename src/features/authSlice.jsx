import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name : 'auth',
    initialState : {
        baseUrl : 'http://localhost:4200',
        apiUrl : 'http://localhost:4200/api'
    },
    reducers:{

    }
})

export default authSlice.reducer