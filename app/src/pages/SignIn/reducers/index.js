import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { signIn } from "../api";
import { LOCAL_STORAGE_KEYS } from "../../../constants";

const initialState = {
  isLoading: false,
  error: null,
  userInfo: {},
  accessToken: null,
  isAuth: false,
};

export const SignInAuth = createAsyncThunk("auth/signIn", async (data) => {
  const response = await signIn(data);

  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(SignInAuth.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(SignInAuth.fulfilled, (state, { payload }) => {
      const { accessToken, ...userInfo } = payload;

      state.isLoading = false;
      state.userInfo = userInfo;
      state.accessToken = accessToken;
      state.isAuth = true;

      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
    });
    builder.addCase(SignInAuth.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export default authSlice.reducer;