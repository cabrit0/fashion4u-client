import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/api/authSlice";
import pageSlice from "../pages/pageSlice";

export const store = configureStore({
  reducer: {
    page: pageSlice,
    auth: authSlice,
  },
});

export default store;
