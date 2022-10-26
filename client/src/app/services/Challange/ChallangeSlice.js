import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import store from '../../store'
import * as challangeAPI from './ChallangeAPI'

export const userSlice = createSlice({
    name: "ChallangeSlice", 
    initialState: {
        allChallanges: [],
        allGroups: []
    }, 
    reducers:{},
    extraReducers: {
        [challangeAPI.createChallangeAsync.fulfilled]: (state, action) => {
            if( !action.payload.err ){
                console.log("We have Received: ", action.payload)
                
            } else {
                console.log("Wait for next call we had Error: ", action.payload.err  )
            }
        },
    }
});

export default userSlice.reducer;
