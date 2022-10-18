import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import store from "../../store";
import * as authAPI from "../user/authAPI";
import * as settingAPI from "./settingAPI";

export const settingSlice = createSlice({
  name: "settingSlice",
  initialState: {
    darkmode: true,
  },
  reducers: {
    /* To be filled in later if needed*/
  },
  extraReducers: {},
});

export default settingSlice.reducer;
