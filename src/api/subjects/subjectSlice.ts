// subjectSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { retrieveSubjectsAPI } from "./retrieveSubjectsAPI"; // replace with your actual retrieve subjects API call

interface SubjectState {
  subjects: any[]; // Update this based on your subject structure
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SubjectState = {
  subjects: [],
  loading: "idle",
  error: null,
};

export const retrieveSubjects = createAsyncThunk(
  "subject/retrieveSubjects",
  async () => {
    const response = await retrieveSubjectsAPI(); // replace with your actual API call
    return response.data;
  }
);

const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    retrieveSubjectsPending: (state) => {
      state.loading = "pending";
    },
    retrieveSubjectsFulfilled: (state, action) => {
      state.loading = "succeeded";
      state.subjects = action.payload;
      state.error = null;
    },
    retrieveSubjectsRejected: (state, action) => {
      state.loading = "failed";
      state.error = action.error.message || "Failed to retrieve subjects";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(retrieveSubjects.fulfilled, (state, action) => {
      // Handling createAsyncThunk fulfilled action using reducers
      state.loading = "succeeded";
      state.subjects = action.payload;
      state.error = null;
    });
  },
});

export const {
  retrieveSubjectsPending,
  retrieveSubjectsFulfilled,
  retrieveSubjectsRejected,
} = subjectSlice.actions;
export default subjectSlice.reducer;
