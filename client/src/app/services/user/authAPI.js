import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import store from '../../store'

export const loginUserAsync = createAsyncThunk(
    'user/login/loginUserAsync',
    async (payload) => {
        console.log("Encoded JWT Token: ", payload )

        let fetchRoute = `http://localhost:8000/auth/google`; 
        const serverResponse = await fetch(fetchRoute, {
               method: 'POST',
               mode: 'cors',
               headers: { 'Content-Type': 'application/json' },
               credentials: 'include',
               body: JSON.stringify(payload)
             })
   
        if( serverResponse.ok ){
            var resp = await serverResponse.json()
            return resp  
        } 
    }  
);

export const refreshAccessTokenAsync = createAsyncThunk(
    'user/refresh/refreshAccessTokenAsync',
    async () => {
        let fetchRoute = `http://localhost:8000/refresh`;
        try {
            const serverResponse = await fetch(fetchRoute, {
                method: 'GET',
                mode: 'cors',
                headers: { 
                     'Content-Type': 'application/json',  
                 },
                credentials: 'include',
            });
    
            if( !serverResponse.ok ){
                if( serverResponse.status === 403 ){
                    ////////////////////////////////////////////////////////////////////////////////
                    // Task: Refresh Token Was not found in the Database Force Logout the user!!! //
                    ////////////////////////////////////////////////////////////////////////////////
                } 
                throw new Error(`${serverResponse.status} ${serverResponse.statusText}`) 
            } 
            return await serverResponse.json()
        } catch (err) {
            console.log("Do Something Here")
        }
    }  
);
