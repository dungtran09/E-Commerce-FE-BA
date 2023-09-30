import { createSlice } from "@reduxjs/toolkit";
import toast, { Toaster } from "react-hot-toast";

const initialState = {
  listItems: localStorage.getItem("cart_Items")
    ? JSON.parse(localStorage.getItem("cart_Items"))
    : [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.listItems?.findIndex(
        (item) => item._id === action.payload._id,
      );
      if (itemIndex >= 0) {
        state.listItems[itemIndex].quantity += 1;
      } else {
        const item = { ...action.payload, quantity: 1 };
        state.listItems?.push(item);
      }
    },
    removeItem(state, action) {
      const newCart = state.listItems?.filter(
        (item) => item._id !== action.payload,
      );
      state.listItems = newCart;
      localStorage.setItem("cart_Items", JSON.stringify(state.listItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.listItems?.findIndex(
        (item) => item._id === action.payload,
      );
      if (state.listItems[itemIndex].quantity > 1) {
        state.listItems[itemIndex].quantity -= 1;
      } else if (state.listItems[itemIndex].quantity === 1) {
        const newCart = state.listItems?.filter(
          (item) => item._id !== action.payload,
        );
        state.listItems = newCart;
      }
      localStorage.setItem("cart_Items", JSON.stringify(state.listItems));
    },
    clearCart(state, action) {
      state.listItems = [];
      localStorage.setItem("cart_Items", JSON.stringify(state.listItems));
    },
    calcTotal(state, action) {
      let { total, quantity } = state.listItems?.reduce(
        (previousItem, currentItem) => {
          const { price, quantity } = currentItem;
          const totalCurentItem = price * quantity;
          previousItem.total += totalCurentItem;
          previousItem.quantity += quantity;

          return previousItem;
        },
        { total: 0, quantity: 0 },
      );
      state.totalAmount = total;
      state.totalQuantity = quantity;
    },
  },
});

export const { addToCart, removeItem, decreaseCart, clearCart, calcTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
