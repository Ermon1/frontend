import axios from "axios";

export const retrieveSubjectsAPI = async () => {
  try {
    const response = await axios.get("/api/subjects"); 
    return response.data;
  } catch (error) {
    throw error;
  }
};
