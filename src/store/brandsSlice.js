import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import statusCode from "../utils/statusCode";
import * as apis from "../apis";

const initialState = {
  data: [],
  status: statusCode.EDLE,
};

export const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.LOADING;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.EDLE;
      })
      .addCase(getBrands.rejected, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.ERROR;
      });
  },
});

export const getBrands = createAsyncThunk(
  "/brands",
  async (data, { rejectWithValue }) => {
    const res = await apis.apiGetBrands();
    if (res?.status !== "success") {
      return rejectWithValue(res);
    }
    return res.data;
  },
);

export const {} = brandsSlice.actions;
export default brandsSlice.reducer;
