import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const fetchUserPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "http://localhost:8080/api/v1/posts"
    );
    dispatch(setUserPosts(data));
  } catch (err) {
    console.error(err);
  }
};

export const createUserPost = (postData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8080/api/v1/posts",
      postData
    );
    dispatch(addUserPost(data));
  } catch (err) {
    console.error(err);
  }
};

export const deleteUserPost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8080/api/v1/posts/${postId}`);
    dispatch(removeUserPost(postId));
  } catch (err) {
    console.error(err);
  }
};

export default userPostsSlice.reducer;
