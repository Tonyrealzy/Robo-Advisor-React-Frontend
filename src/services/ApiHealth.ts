import axiosInstance from "../api/axiosInstance";
import secondaryAxiosInstance from "../api/secondaryAxiosInstance";

export const CheckAIApiHealth = async () => {
  try {
    const response = await secondaryAxiosInstance.get("/health");
    return response;
  } catch (error: any) {
    return error.error;
  }
};

export const CheckAuthApiHealth = async () => {
  try {
    const response = await axiosInstance.get("/api/swagger/index.html");
    return response;
  } catch (error: any) {
    return error.error;
  }
};
