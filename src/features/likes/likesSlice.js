import axiosInstance from "../../app/api/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const likePost = createAsyncThunk("like/likePost", async (postId) => {
  const response = await axiosInstance.put(`likes/like/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
    },
  });
  console.log(response);
  return response;
});

export const unlikePost = createAsyncThunk(
  "like/unlikePost",
  async (postId) => {
    const response = await axiosInstance.put("likes/unlike/posts", postId, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
      },
    });
    return response.data.data;
  }
);

export const likeComment = createAsyncThunk(
  "like/likeComment",
  async (commentId) => {
    const response = await axiosInstance.put("likes/like/comments", commentId, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
      },
    });
    return response.data.data;
  }
);

export const unlikeComment = createAsyncThunk(
  "like/unlikeComment",
  async (commentId) => {
    const response = await axiosInstance.put(
      "likes/unlike/comments",
      commentId,
      {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
        },
      }
    );
    return response.data.data;
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
    unlikePostStart: (state) => {
      state.loading = true;
    },
    unlikePostSuccess: (state, action) => {
      state.postLikes = action.payload;
      state.loading = false;
      state.error = null;
    },
    unlikePostFailure: (state, action) => {
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
    unlikeCommentStart: (state) => {
      state.loading = true;
    },
    unlikeCommentSuccess: (state, action) => {
      state.commentLikes = action.payload;
      state.loading = false;
      state.error = null;
    },
    unlikeCommentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  likePostStart,
  likePostSuccess,
  likePostFailure,
  unlikePostStart,
  unlikePostSuccess,
  unlikePostFailure,
  likeCommentStart,
  likeCommentSuccess,
  likeCommentFailure,
  unlikeCommentStart,
  unlikeCommentSuccess,
  unlikeCommentFailure,
} = likeSlice.actions;

export default likeSlice.reducer;
