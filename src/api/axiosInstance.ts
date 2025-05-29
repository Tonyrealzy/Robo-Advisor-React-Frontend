import axios from "axios";
import { logger } from "../components/logger";
import { toast } from "react-toastify";
import { decryptData } from "../utils/encryption";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    const decryptedToken = decryptData(token);
    if (decryptedToken) {
      config.headers.Authorization = `Bearer ${decryptedToken}`;
    }
  }
  return config;
});

// Optional: Handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (window.location.pathname !== "/") {
        toast.error("Invalid or expired token. Redirecting to login...");
        logger("Unauthorized, redirecting to login...");
        window.location.replace("/");
      }
      return;
    } else {
      return error?.response;
    }
  }
);

export default axiosInstance;
