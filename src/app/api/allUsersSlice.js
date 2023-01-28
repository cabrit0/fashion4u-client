import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async (arg, thunkAPI) => {
    const response = await axios.get(
      "http://localhost:8080/api/v1/users/allUsers_",
      {
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
        },
      }
    );
    //console.log(response.data)
    return response.data;
  }
);

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: {
    status: "idle",
    error: null,
    allUsers: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allUsers = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllUsers = (state) => state.allUsers.allUsers;

export default allUsersSlice.reducer;
