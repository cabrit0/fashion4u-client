import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../app/api/axiosInstance";

export const getProfile = createAsyncThunk(
  "users/getProfile",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.get("users/profile", {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
        },
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  "users/updateProfile",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.patch("users/profile", userData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteProfile = createAsyncThunk(
  "users/deleteProfile",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.delete("users/profile");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  "users/changePassword",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.patch(
        "users/change-password",
        userData
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const uploadAvatar = createAsyncThunk(
  "users/uploadAvatar",
  async (avatar, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);

      const response = await axiosInstance.put(
        "users/avatar/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${thunkAPI.getState().auth.user.token}`,
          },
        }
      );

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.get("users");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(`users/${userData.id}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const uploadUser = createAsyncThunk(
  "users/uploadUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("users", userData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    profile: null,
    allUsers: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    },
    [getProfile.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [updateProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [updateProfile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    },
    [updateProfile.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteProfile.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.profile = null;
    },
    [deleteProfile.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [changePassword.pending]: (state) => {
      state.isLoading = true;
    },
    [changePassword.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [changePassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [uploadAvatar.pending]: (state) => {
      state.isLoading = true;
    },
    [uploadAvatar.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    },
    [uploadAvatar.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getAllUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.allUsers = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteUser.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [deleteUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [uploadUser.pending]: (state) => {
      state.isLoading = true;
    },
    [uploadUser.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [uploadUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
