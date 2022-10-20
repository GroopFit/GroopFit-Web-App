import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import store from '../../store'
import * as authAPI from '../user/authAPI'

export const createChallangeAsync = createAsyncThunk(
    'user/createChallange/createChallangeAsync', 
    async(payload, thunkAPI) => {
        console.log("Starting to send data: ", payload);
        let fetchRoute = `http://localhost:8000/challange/`;
        try {
            const serverResponse = await fetch(fetchRoute, {
                method: 'POST',
                mode: 'cors',
                headers: { 
                     'Content-Type': 'application/json',
                     'Authorization':  `Bearer ${store.getState().userData.auth.accessToken}`  
                 },
                credentials: 'include',
                body: JSON.stringify(payload)
            });
            if( !serverResponse.ok ){
                if( serverResponse.status === 403 ){
                    await thunkAPI.dispatch(authAPI.refreshAccessTokenAsync())
                    /*--------------------------------------------------------------------/
                    /  Task: Limit the recursion to a max of 5 times using the variable   /
                    /  state.userData.info.refreshTokenRequestCount to do this.           /
                    /--------------------------------------------------------------------*/
                    await thunkAPI.dispatch(createChallangeAsync(payload)).payload
                    return { err: 404 }
                } 
                throw new Error(`${serverResponse.status} ${serverResponse.statusText}`) 
            } 
            return await serverResponse.json()
        }
        catch (err) {
            console.log(err);

        }
    }
);