import axiosInstance from "../api/axiosInstance";
import {
  ChangePasswordRequest,
  ConfirmSignUpRequest,
  LoginRequest,
  LogoutRequest,
  PasswordResetRequest,
  SignUpRequest,
} from "../models/interface";

export const LoginService = async (payload: LoginRequest): Promise<any> => {
  try {
    const response = await axiosInstance.post("/auth/login", payload);
    return response.data;
  } catch (error: any) {
    return error.error;
  }
};

export const SignupService = async (payload: SignUpRequest) => {
  try {
    const response = await axiosInstance.post("/auth/signup", payload);
    return response.data;
  } catch (error: any) {
    return error.error;
  }
};

export const ConfirmSignupService = async (payload: ConfirmSignUpRequest) => {
  try {
    const response = await axiosInstance.post("/auth/signup/confirm", payload);
    return response.data;
  } catch (error: any) {
    return error.error;
  }
};

export const ChangePasswordService = async (payload: ChangePasswordRequest) => {
  try {
    const response = await axiosInstance.post("/auth/change-password", payload);
    return response.data;
  } catch (error: any) {
    return error.error;
  }
};

export const LogoutService = async (payload: LogoutRequest) => {
  try {
    const response = await axiosInstance.post("/auth/logout", payload);
    return response.data;
  } catch (error: any) {
    return error.error;
  }
};

export const PasswordResetService = async (payload: PasswordResetRequest) => {
  try {
    const response = await axiosInstance.post("/auth/password-reset", payload);
    return response.data;
  } catch (error: any) {
    return error.error;
  }
};

export const ResendLinkService = async (payload: PasswordResetRequest) => {
  try {
    const response = await axiosInstance.post("/auth/resend-link", payload);
    return response.data;
  } catch (error: any) {
    return error.error;
  }
};
