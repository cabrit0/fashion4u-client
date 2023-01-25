import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import pageReducer from "../pages/pageSlice";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    auth: authReducer,
  },
});

export default store;
