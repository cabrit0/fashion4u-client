import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import pageReducer from "../pages/pageSlice";
import allUsersReducer from "./api/allUsersSlice";
import userPostsReducer from "../features/posts/userPostsSlice";
import globalPostsReducer from "../features/posts/globalPostsSlice";
import likesReducer from "../features/likes/likesSlice";
import commentsReducer from "../features/comments/commentsSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    auth: authReducer,
    allUsers: allUsersReducer,
    userPosts: userPostsReducer,
    globalPosts: globalPostsReducer,
    likes: likesReducer,
    comments: commentsReducer,
  },
});

export default store;
