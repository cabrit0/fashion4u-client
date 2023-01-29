import axiosInstance from "../../app/api/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchAllPosts = createAsyncThunk(
  "globalPosts/fetchAllPosts",
  async (arg, thunkAPI) => {
    const response = await axiosInstance.get("allPosts_", {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
      },
    });
    console.log(response);
    return response.data;
  }
);

const globalPostsSlice = createSlice({
  name: "globalPosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default globalPostsSlice.reducer;
