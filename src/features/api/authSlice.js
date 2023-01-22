import { createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/api";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null,
    user: null,
  },
  reducers: {
    signupStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    signupSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
    signupFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    },
    loginFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const {
  signupStart,
  signupSuccess,
  signupFailed,
  loginStart,
  loginSuccess,
  loginFailed,
  logout,
} = authSlice.actions;

export const signup = (userData) => async (dispatch) => {
  try {
    dispatch(signupStart());
    const response = await axiosInstance.post("users/register", userData);
    dispatch(signupSuccess(response.data));
    console.log(response.data);
  } catch (response) {
    dispatch(signupFailed(response));
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await axiosInstance.post("users/login", userData);
    dispatch(loginSuccess(response.data));
    console.log(response.data);
  } catch (response) {
    dispatch(loginFailed(response));
  }
};

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
