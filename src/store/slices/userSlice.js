import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import statusCode from "../../utils/statusCode";
import * as apis from "../../apis";

const initialState = {
  isLoggedIn: false,
  status: statusCode.EDLE,
  userInfo: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogout: (state, action) => {
      state.userInfo = null;
      state.isLoggedIn = false;
      state.status = statusCode.EDLE;
      localStorage.removeItem("userInfos");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.userInfo = action.payload;
        state.status = statusCode.LOADING;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.isLoggedIn = true;
        state.status = statusCode.SUCCESS;
        localStorage.setItem("userInfos", JSON.stringify(action.payload));
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.userInfo = action.payload;
        state.isLoggedIn = false;
        state.status = statusCode.ERROR;
        localStorage.removeItem("userInfos");
      });
  },
});

export const userLogin = createAsyncThunk(
  "users/login",
  async (data, { rejectWithValue }) => {
    const res = await apis.apiLogin(data);
    if (res?.status !== "success") {
      return rejectWithValue(res);
    }
    return res?.data;
  },
);

export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
