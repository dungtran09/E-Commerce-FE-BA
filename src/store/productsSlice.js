import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import statusCode from "../utils/statusCode";
import * as apis from "../apis";

const initialState = {
  data: [],
  status: statusCode.EDLE,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.EDLE;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.ERROR;
      });
  },
});

export const getProducts = createAsyncThunk(
  "products/newProducts",
  async (data, { rejectWithValue }) => {
    const res = await apis.apiGetProducts({ sort: "-createAt" });
    if (res?.status !== "success") {
      return rejectWithValue(res);
    }
    return res.data;
  },
);

export const {} = productsSlice.actions;
export default productsSlice.reducer;
