import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import store from "../../store";
import * as authAPI from "../user/authAPI";
import * as settingAPI from "./settingsAPI";

export const settingsSlice = createSlice({
  name: "settingSlice",
  initialState: {
    darkmode: true,
    activityColors: [ {activity: "walking", color: "pink"},
                      {activity: "running", color: "green"},
                      {activity: "swimming", color: "blue"},
                      {activity: "biking", color: "orange"},
                    ]
  },
  reducers: {
    /* To be filled in later if needed*/
  },
  extraReducers: {},
});

export default settingsSlice.reducer;
