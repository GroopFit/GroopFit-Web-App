import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import store from '../../store'
import * as fitnessAPI from './fitnessAPI'

export const userSlice = createSlice({
    name: "fitnessSlice",
    initialState: {
        allActvities: null,
        
        
    },
    reducers:{ /* To be filled in later if needed*/ },
    extraReducers: {
        /*-------------------------------------------------------------------------*/
        /*                          Authentication Reducers                        */
        /*-------------------------------------------------------------------------*/
        [fitnessAPI.createActivityAsync.fulfilled]: (state, action) => {
            if( !action.payload.err ){
                console.log("We have Received: ", action.payload)
                state.allActvities.push(action.payload.activity)
                
            } else {
                console.log("Wait for next call we had Error: ", action.payload.err  )
            }
        },
        [fitnessAPI.getUserActivitiesAsync.fulfilled]: (state, action) => {
            if( !action.payload.err ){
                console.log("We have Received The Following Activities: ", action.payload) 
                state.allActvities = action.payload.activities
            } else {
                console.log("Wait for next call we had Error: ", action.payload.err  )
            }
        },
    }
});

export default userSlice.reducer;