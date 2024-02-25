import axios from "axios";

export const retrieveExamAPI = async () => {
  try {
    const response = await axios.get("/api/exams"); 
    return response.data;
  } catch (error) {
    throw error;
  }
};
// retrieveExamAPI.ts
import axios from 'axios';

export const profileAPI = async () => {
  try {
    const response = await axios.get('/api/profile'); // replace with your actual API endpoint
    return response.data;
  } catch (error) {
    throw error;
  }
};
