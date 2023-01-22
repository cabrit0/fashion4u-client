import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/api/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice
  },
});

export default store;
