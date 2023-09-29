import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeProduct(state, action) {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addToCart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
