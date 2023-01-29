import axiosInstance from "../../app/api/axiosInstance";
import { createSlice } from "@reduxjs/toolkit";

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

export const likePost = (postId) => async (dispatch) => {
  try {
    dispatch(likePostStart());
    const res = await axiosInstance.put(`likes/like/posts`);
    dispatch(likePostSuccess(res.data.data));
  } catch (error) {
    dispatch(likePostFailure(error.message));
  }
};

export const unlikePost = (postId) => async (dispatch) => {
  try {
    dispatch(unlikePostStart());
    const res = await axiosInstance.put(`likes/like/posts`);
    dispatch(unlikePostSuccess(res.data.data));
  } catch (error) {
    dispatch(unlikePostFailure(error.message));
  }
};

export const likeComment = (commentId) => async (dispatch) => {
  try {
    dispatch(likeCommentStart());
    const res = await axiosInstance.put(likes`/like/comments`);
    dispatch(likeCommentSuccess(res.data.data));
  } catch (error) {
    dispatch(likeCommentFailure(error.message));
  }
};

export const unlikeComment = (commentId) => async (dispatch) => {
  try {
    dispatch(unlikeCommentStart());
    const res = await axiosInstance.put(`likes/like/comments`);
    dispatch(unlikeCommentSuccess(res.data.data));
  } catch (error) {
    dispatch(unlikeCommentFailure(error.message));
  }
};

export default likeSlice.reducer;
