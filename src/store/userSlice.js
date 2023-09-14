import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  data: [],
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, action) => {
      console.log(action);
      state.isLoggedIn = true;
      state.data = action.payload.data;
      state.token = action.payload.token;
    },
  },
});

export const { signup } = userSlice.actions;
export default userSlice.reducer;
