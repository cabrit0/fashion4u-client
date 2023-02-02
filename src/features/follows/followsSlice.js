import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../app/api/axiosInstance";

export const followUser = createAsyncThunk(
  "follow/follow",
  async (userId, thunkAPI) => {
    const response = await axiosInstance.put(
      "follow",
      { userId },
      {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
        },
      }
    );
    console.log(response, userId);
    return response;
  }
);

export const unfollowUser = createAsyncThunk(
  "follow/unfollow",
  async (userId, thunkAPI) => {
    const response = await axiosInstance.delete("follow", {
      data: { userId },
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
      },
    });
    console.log(response);
    return response;
  }
);

const initialState = {
  currentUser: {
    followers: [],
    following: [],
  },
  loading: "idle",
  error: null,
};

const followSlice = createSlice({
  name: "follow",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: {
    [followUser.pending]: (state) => {
      state.loading = "pending";
    },
    [followUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = "idle";
    },
    [followUser.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = "idle";
    },
    [unfollowUser.pending]: (state) => {
      state.loading = "pending";
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
      state.loading = "idle";
    },
    [unfollowUser.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = "idle";
    },
  },
});

export const { reset } = followSlice.actions;
export default followSlice.reducer;
