import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../app/api/axiosInstance";

const userPostsSlice = createSlice({
  name: "userPosts",
  initialState: [],
  reducers: {
    setUserPosts: (state, action) => {
      state.length = 0;
      state.push(...action.payload);
    },
    addUserPost: (state, action) => {
      state.push(action.payload);
    },
    removeUserPost: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { setUserPosts, addUserPost, removeUserPost } =
  userPostsSlice.actions;

export const fetchUserPosts = createAsyncThunk(
  "userPosts/fetchUserPosts",
  async (arg, thunkAPI) => {
    const response = await axiosInstance.get("/posts", {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
      },
    });
    return response.data;
  }
);

export const createUserPost = createAsyncThunk(
  "userPosts/createUserPost",
  async (postData, thunkAPI) => {
    const response = await axiosInstance.post("/posts", postData, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
      },
    });
    console.log(response);
    return response.data;
  }
);

export const deleteUserPost = createAsyncThunk(
  "userPosts/deleteUserPost",
  async (postId, thunkAPI) => {
    await axiosInstance.delete(`/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
      },
    });
    return postId;
  }
);

export default userPostsSlice.reducer;
