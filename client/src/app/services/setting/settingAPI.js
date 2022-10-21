import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import store from "../../store";
import * as authAPI from "../user/authAPI";

export const changeSettingAsync = createAsyncThunk();
