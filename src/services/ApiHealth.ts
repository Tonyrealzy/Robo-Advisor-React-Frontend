import secondaryAxiosInstance from "../api/secondaryAxiosInstance";
// import { toast } from "react-toastify";
// import axiosInstance from "../api/axiosInstance";
// import { logger } from "../components/logger";

// export const CheckAIApiHealth = async () => {
//   try {
//     const data = await secondaryAxiosInstance.get("/health");
//     logger(data);
//     if (data?.status === 200) {
//       toast.success("AI service is active.");
//       return data.data.message;
//     } else {
//       toast.error("Failed to load AI service.");
//     }
//   } catch (error: any) {
//     return error.error;
//   }
// };

export const CheckAuthApiHealth = async () => {
  try {
    const response = await secondaryAxiosInstance.get("/api/swagger/index.html");
    return response;
  } catch (error: any) {
    return error.error;
  }
};
