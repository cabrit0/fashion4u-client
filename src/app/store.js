import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import pageReducer from "../pages/pageSlice";
import allUsersReducer from "./api/allUsersSlice";
import userPostsReducer from "../features/posts/userPostsSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    auth: authReducer,
    allUsers: allUsersReducer,
    userPosts: userPostsReducer,
  },
});

export default store;
