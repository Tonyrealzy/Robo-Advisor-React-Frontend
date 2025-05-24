import axiosInstance from "../api/axiosInstance";
import {
  AISendRequest,
  GetByDateRequest,
  GetByDaysRequest,
  GetByTodayRequest,
} from "../models/interface";

export const AIRequestService = async (payload: AISendRequest) => {
  try {
    const response = await axiosInstance.post("/ai/send-request", payload);
    return response.data;
  } catch (error: any) {
    return error.error;
  }
};

export const GetAIResponseByDateService = async (params?: GetByDateRequest) => {
  try {
    const response = await axiosInstance.get("/ai/fetch-response/date", {
      params,
    });
    return response.data;
  } catch (error: any) {
    return error.error;
  }
};

export const GetAITodayResponseService = async (params?: GetByTodayRequest) => {
  try {
    const response = await axiosInstance.get("/ai/fetch-response/today", {
      params,
    });
    return response.data;
  } catch (error: any) {
    return error.error;
  }
};

export const GetAIResponseByDaysService = async (params: GetByDaysRequest) => {
  try {
    const response = await axiosInstance.get("/ai/fetch-response/days", {
      params,
    });
    return response.data;
  } catch (error: any) {
    return error.error;
  }
};
