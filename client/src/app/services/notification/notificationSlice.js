import { createAsyncThunk , createSlice } from '@reduxjs/toolkit';
import store from '../../store'
import * as notificationAPI from './notificationAPI'

export const NotificationSlice = createSlice({


    name: "notificationSlice",
    initialState: {
    allActvities: [],
        
    },
    reducers: {
        createAlert: (state, action) => {
            state.alerts.push({
            message: action.payload.message,
            type: action.payload.type
            });
        }
    },
    extraReducers: {
        [notificationAPI.createActivityAsync.fulfilled]: (state, action) => {
            state.alerts.push({ message: action.error.message, type: "error" });
            }
        }
    });


export default NotificationSlice;