import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import store from '../../store'
import * as authAPI from './authAPI'
import * as userAPI from './userAPI'

export const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        auth: {
            /*  JWT Token Generated by Backend  */
            accessToken: null, 
            /* Counter to limit recursion depth  /
            /  of refreshing JWT Access Tokens. */
            refreshTokenRequestCount: 0
        },
        info: {
            userId: null,
            email: null,
            fullName: null,
            userPicture: null
        },
        
    },
    reducers:{ /* To be filled in later if needed*/ },
    extraReducers: {
        /*-------------------------------------------------------------------------*/
        /*                          Authentication Reducers                        */
        /*-------------------------------------------------------------------------*/
        [authAPI.loginUserAsync.fulfilled]: (state, action) => {
            console.log("First Access Token Is: ", action.payload.accessToken)
            console.log("We Have Logged IN: ", action.payload)

            state.auth.accessToken = action.payload.accessToken
            state.info.userId = action.payload.userId
        },
        [authAPI.refreshAccessTokenAsync.fulfilled]: (state, action) => {
            console.log("Refreshed Access Token is: ", action.payload.accessToken)
            state.auth.accessToken = action.payload.accessToken
        },
        /*-------------------------------------------------------------------------*/
        /*                             User Info Reducers                          */
        /*-------------------------------------------------------------------------*/
        [userAPI.getUserDataAsync.fulfilled]: (state, action) => {
            console.log("we have been fulfilled: ", action.payload)
            state.info.email = action.payload.email
            state.info.fullName = action.payload.fullName
            state.info.userPicture = action.payload.pictureUrl
            console.log(state.info.userId)
        },
        [userAPI.pingpongAsync.fulfilled]: (state, action) => {
            if( !action.payload.err ){
                console.log("We have Recived: ", action.payload)
            } else {
                console.log("Wait for next call we had Error: ", action.payload.err  )
            }
        },
    }
});

export default userSlice.reducer;