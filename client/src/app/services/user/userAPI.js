import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import store from '../../store'
import * as authAPI from './authAPI'
import axios from 'axios';
import React from "react";

import reqInterceptor from '../../middleware/reqInterceptor';
import respInterceptor from '../../middleware/reqInterceptor';

export const getUserDataAsync = createAsyncThunk(
    'user/getData/getUserDataASync',
    async (payload) => {
        let fetchRoute = `http://localhost:8000/user/${store.getState().userData.info.userId}`;
        const serverResponse = await fetch(fetchRoute, {
               method: 'GET',
               mode: 'cors',
               headers: { 
                    'Content-Type': 'application/json',
                    'Authorization':  `Bearer ${store.getState().userData.auth.accessToken}` 
                },
               credentials: 'include',
             })

        if( serverResponse.ok ){
            var resp = await serverResponse.json()
            return resp  
        } else {  }
    }  
);

// export const pingpongAsync = createAsyncThunk(
//     'user/pingpong/pingpongAsync',
//     async (payload, thunkAPI) => {
//         console.log("Starting to send data: ", payload)
//         let fetchRoute = `http://localhost:8000/pingpong`;
//         try {
//             const serverResponse = await fetch(fetchRoute, {
//                 method: 'POST',
//                 mode: 'cors',
//                 headers: { 
//                      'Content-Type': 'application/json',
//                      'Authorization':  `Bearer ${store.getState().userData.auth.accessToken}`  
//                  },
//                 credentials: 'include',
//                 body: JSON.stringify(payload)
//             });
//             // console.log("serverResponse " + serverResponse);
//             if( !serverResponse.ok ){
//                 if( serverResponse.status === 403 ){
//                     await thunkAPI.dispatch(authAPI.refreshAccessTokenAsync())
//                     /*--------------------------------------------------------------------/
//                     /  Task: Limit the recursion to a max of 5 times using the variable   /
//                     /  state.userData.info.refreshTokenRequestCount to do this.           /
//                     /--------------------------------------------------------------------*/
//                     await thunkAPI.dispatch(pingpongAsync(payload)).payload
//                     return { err: 404 }
//                 } 
//                 throw new Error(`${serverResponse.status} ${serverResponse.statusText}`) 
//             } 
//             return await serverResponse.json()
//         } catch (err) {
//             console.log("TESTING")
//         }
//     }  
// );

export const pingpongAsync = createAsyncThunk(
    'user/pingpong/pingpongAsync',
    async (payload, thunkAPI) => {
        console.log("Starting to send data: ", payload)
        let fetchRoute = `http://localhost:8000/pingpong`;

        let config = {
            headers: { 
                'Content-Type': 'application/json',
                'Authorization':  `Bearer ${store.getState().userData.auth.accessToken}`  
            }
        }
        
        axios.post(fetchRoute, payload, config)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch(async error => { // use middleware, make interceptor on every call
            if (error.response.status === 403) {
                await thunkAPI.dispatch(authAPI.refreshAccessTokenAsync());
                console.log("error " + error);

                // limits recursion to 5 retries
                if (store.getState().userData.info.refreshTokenRequestCount <= 5) {
                    await thunkAPI.dispatch(pingpongAsync(payload)).payload;
                }
                return { err: 404 };
            }
            throw new Error(error); 
        })
    }
);