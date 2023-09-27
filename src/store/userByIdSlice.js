import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import statusCode from "../utils/statusCode";
import * as apis from "../apis";

const initialState = {
  state: null,
  data: [],
};

export const userSlice = createSlice({
  name: "userById",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.LOADING;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.EDLE;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.ERROR;
      });
  },
});
export const getUser = createAsyncThunk(
  "users",
  async (id, { rejectWithValue }) => {
    const res = await apis.apiGetUser(id);
    if (res?.status !== "success") {
      return rejectWithValue(res);
    }
    return res?.data;
  },
);

export const {} = userSlice.actions;
export default userSlice.reducer;
