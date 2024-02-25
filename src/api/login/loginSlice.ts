// loginSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI } from "./loginAPI"; 
interface LoginState {
  user: any;
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: LoginState = {
  user: null,
  loading: "idle",
  error: null,
};

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async (credentials: any) => {
    const response = await loginAPI(credentials); 
    return response.data;
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginUserPending: (state) => {
      state.loading = "pending";
    },
    loginUserFulfilled: (state, action) => {
      state.loading = "succeeded";
      state.user = action.payload;
      state.error = null;
    },
    loginUserRejected: (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Login failed";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.user = action.payload;
      state.error = null;
    });
  },
});

export const { loginUserPending, loginUserFulfilled, loginUserRejected } =
  loginSlice.actions;
export default loginSlice.reducer;
