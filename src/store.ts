// index.ts
import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./api/signup/signupSlice";
import loginReducer from "./api/login/loginSlice";
import subjectsReducer from "./api/subjects/subjectSlice";
import examsReducer from "./api/exams/examSlice";

const store = configureStore({
  reducer: {
    signup: signupReducer,
    login: loginReducer,
    subjects: subjectsReducer,
    exams: examsReducer,
  },
});

export default store;
