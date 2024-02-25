import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { retrieveExamAPI } from "./examAPI";
interface ExamState {
  exams: any[]; 
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ExamState = {
  exams: [],
  loading: "idle",
  error: null,
};

export const retrieveExams = createAsyncThunk(
  "exam/retrieveExams",
  async () => {
    const response = await retrieveExamAPI(); 
    return response.data;
  }
);

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    retrieveExamsPending: (state) => {
      state.loading = "pending";
    },
    retrieveExamsFulfilled: (state, action) => {
      state.loading = "succeeded";
      state.exams = action.payload;
      state.error = null;
    },
    retrieveExamsRejected: (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to retrieve exams";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveExams.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.exams = action.payload;
      state.error = null;
    });
  },
});

export const {
  retrieveExamsPending,
  retrieveExamsFulfilled,
  retrieveExamsRejected,
} = examSlice.actions;
export default examSlice.reducer;
