import axios from "axios";

const secondaryAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 80000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default secondaryAxiosInstance;
