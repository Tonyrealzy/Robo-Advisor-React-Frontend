import secondaryAxiosInstance from "../api/secondaryAxiosInstance";
import { logger } from "../components/logger";

export const CheckApiHealth = async () => {
  try {
    const response = await secondaryAxiosInstance.get("/health");
    if (response.status === 200) {
      logger(response.data);
    }
    return response.data;
  } catch (error: any) {
    return error.error;
  }
};
