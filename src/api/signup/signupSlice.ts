// signupSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signupAPI } from "./signupAPI"; // replace with your actual signup API call

interface SignupState {
  user: any; 
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SignupState = {
  user: null,
  loading: "idle",
  error: null,
};

export const signupUser = createAsyncThunk(
  "signup/signupUser",
  async (userData: any) => {
    const response = await signupAPI(userData); // replace with your actual API call
    return response.data;
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signupUserPending: (state) => {
      state.loading = "pending";
    },
    signupUserFulfilled: (state, action) => {
      state.loading = "succeeded";
      state.user = action.payload;
      state.error = null;
    },
    signupUserRejected: (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Signup failed";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.user = action.payload;
      state.error = null;
    });
  },
});

export const { signupUserPending, signupUserFulfilled, signupUserRejected } =
  signupSlice.actions;
export default signupSlice.reducer;
