import axiosInstance from "../../app/api/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  comment: {},
  error: null,
  loading: false,
};

const createComment = createAsyncThunk(
  "comments/createComment",
  async (comment, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/comments", comment);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const getComments = createAsyncThunk(
  "comments/getComments",
  async (params, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/comments", { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const getComment = createAsyncThunk(
  "comments/getComment",
  async (id, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/comments/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const updateComment = createAsyncThunk(
  "comments/updateComment",
  async (comment, thunkAPI) => {
    try {
      const response = await axiosInstance.put(
        `/comments/${comment._id}`,
        comment
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (id, thunkAPI) => {
    try {
      await axiosInstance.delete(`/comments/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload;
      state.loading = false;
    },
    setComment: (state, action) => {
      state.comment = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: {
    [createComment.pending]: (state) => {
      state.loading = true;
    },
    [createComment.fulfilled]: (state, action) => {
      state.comments.unshift([action.payload]);
      state.loading = false;
    },
    [createComment.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [getComments.pending]: (state) => {
      state.loading = true;
    },
    [getComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
      state.loading = false;
    },
    [getComments.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [getComment.pending]: (state) => {
      state.loading = true;
    },
    [getComment.fulfilled]: (state, action) => {
      state.comment = action.payload;
      state.loading = false;
    },
    [getComment.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [updateComment.pending]: (state) => {
      state.loading = true;
    },
    [updateComment.fulfilled]: (state, action) => {
      state.comments = state.comments.map((comment) =>
        comment._id === action.payload._id ? action.payload : comment
      );
      state.loading = false;
    },
    [updateComment.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [deleteComment.pending]: (state) => {
      state.loading = true;
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment._id !== action.payload
      );
      state.loading = false;
    },
    [deleteComment.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setComments, setComment, setLoading, setError, clearError } =
  commentsSlice.actions;
export default commentsSlice.reducer;
