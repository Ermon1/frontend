// retrieveExamAPI.ts
import axios from "axios";

export const retrieveExamAPI = async () => {
  try {
    const response = await axios.get("/api/exams"); // replace with your actual API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};
