import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import store from '../../store'
import * as fitnessAPI from './fitnessAPI'

export const userSlice = createSlice({
    name: "fitnessSlice",
    initialState: {
        allActvities: [],
        
        
    },
    reducers:{ /* To be filled in later if needed*/ },
    extraReducers: {
        /*-------------------------------------------------------------------------*/
        /*                          Authentication Reducers                        */
        /*-------------------------------------------------------------------------*/
        [fitnessAPI.createActivityAsync.fulfilled]: (state, action) => {
            if( !action.payload.err ){
                console.log("We have Recived: ", action.payload)
                
            } else {
                console.log("Wait for next call we had Error: ", action.payload.err  )
            }
        },
    }
});

export default userSlice.reducer;