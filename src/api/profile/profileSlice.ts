// profileSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { profileAPI } from "./profileAPI"; 

interface ProfileState {
  user: any; 
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProfileState = {
  user: null,
  loading: "idle",
  error: null,
};

export const retrieveUserProfile = createAsyncThunk(
  "profile/retrieveUserProfile",
  async () => {
    const response = await profileAPI(); // replace with your actual API call
    return response.data;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    retrieveUserProfilePending: (state) => {
      state.loading = "pending";
    },
    retrieveUserProfileFulfilled: (state, action) => {
      state.loading = "succeeded";
      state.user = action.payload;
      state.error = null;
    },
    retrieveUserProfileRejected: (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to retrieve user profile";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveUserProfile.fulfilled, (state, action) => {
      // Handling createAsyncThunk fulfilled action using reducers
      state.loading = "succeeded";
      state.user = action.payload;
      state.error = null;
    });
  },
});

export const {
  retrieveUserProfilePending,
  retrieveUserProfileFulfilled,
  retrieveUserProfileRejected,
} = profileSlice.actions;
export default profileSlice.reducer;
