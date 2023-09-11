import { createSlice } from "@reduxjs/toolkit";
import statusCode from "../utils/statusCode";
import * as apis from "../apis";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: statusCode.EDLE,
};

export const productCategoriesSlice = createSlice({
  name: "productCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductCategories.pending, (state, action) => {
        state.status = statusCode.LOADING;
      })
      .addCase(getProductCategories.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.EDLE;
      })
      .addCase(getProductCategories.rejected, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.ERROR;
      });
  },
});

export const getProductCategories = createAsyncThunk(
  "app/productCategories",
  async (data, { rejectWithValue }) => {
    const res = await apis.apiGetProductCategories();
    // console.log(res);
    if (res.status !== "success") return rejectWithValue(res);
    return res.data;
  },
);
export const {} = productCategoriesSlice.actions;
export default productCategoriesSlice.reducer;
