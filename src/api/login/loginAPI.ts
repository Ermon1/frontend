import axios from "axios";

export const loginAPI = async (credentials) => {
  try {
    const response = await axios.post("/api/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
