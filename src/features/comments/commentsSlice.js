import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../app/api/axiosInstance";

export const fetchComment = createAsyncThunk(
  "comments/fetchComment",
  async (postId, thunkAPI) => {
    const response = await axiosInstance.get(
      "comments/",
      { postId },
      {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
        },
      }
    );
    console.log(response, id);
    return response;
  }
);

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (postId, thunkAPI) => {
    const response = await axiosInstance.get(
      "comments/",
      { params: { postId } },
      {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
        },
      }
    );
    console.log(response, id);
    return response;
  }
);

export const createComment = createAsyncThunk(
  "comments/",
  async (body, thunkAPI) => {
    const response = await axiosInstance.post(
      "comments/",
      { body },
      {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
        },
      }
    );
    console.log(response, body);
    return response;
  }
);

export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async (commentData, thunkAPI) => {
    const { id, ...rest } = commentData;
    const response = await axiosInstance.put(`comments/${id}`, rest, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
      },
    });
    return response.data;
  }
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (id, thunkAPI) => {
    await axiosInstance.delete(`comments/${id}`, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
      },
    });
    return id;
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    comment: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchComment.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [fetchComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [fetchComments.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [createComment.pending]: (state) => {
      state.isLoading = true;
    },
    [createComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments.unshift(action.payload);
    },
    [createComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [updateComment.pending]: (state) => {
      state.isLoading = true;
    },
    [updateComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.map((comment) =>
        comment.id === action.payload.id ? action.payload : comment
      );
      state.comment = action.payload;
    },
    [updateComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },
    [deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
