import axios from "axios";

const secondaryAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_AI_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default secondaryAxiosInstance;
