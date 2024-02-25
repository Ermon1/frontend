import axios from "axios";

export const signupAPI = async (userData) => {
  try {
    const response = await axios.post("/api/signup", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
