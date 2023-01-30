import axiosInstance from "../../app/api/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const likePost = createAsyncThunk(
  "likes/like/posts",
  async (postId, thunkAPI) => {
    const response = await axiosInstance.put(
      "likes/like/posts",
      { postId },
      {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
        },
      }
    );
    console.log(response, postId);
    return response;
  }
);

export const likeComment = createAsyncThunk(
  "likes/like/comments",
  async (commentId, thunkAPI) => {
    const response = await axiosInstance.put(
      "likes/like/comments",
      { commentId },
      {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
        },
      }
    );
    console.log(response, commentId);
    return response;
  }
);

const likeSlice = createSlice({
  name: "like",
  initialState: {
    loading: false,
    postLikes: [],
    commentLikes: [],
    error: null,
  },
  reducers: {
    likePostStart: (state) => {
      state.loading = true;
    },
    likePostSuccess: (state, action) => {
      state.postLikes = action.payload;
      state.loading = false;
      state.error = null;
    },
    likePostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    likeCommentStart: (state) => {
      state.loading = true;
    },
    likeCommentSuccess: (state, action) => {
      state.commentLikes = action.payload;
      state.loading = false;
      state.error = null;
    },
    likeCommentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  likePostStart,
  likePostSuccess,
  likePostFailure,
  likeCommentStart,
  likeCommentSuccess,
  likeCommentFailure,
} = likeSlice.actions;

export default likeSlice.reducer;
