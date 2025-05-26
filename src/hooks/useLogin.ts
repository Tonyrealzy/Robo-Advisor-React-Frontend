import { useForm } from "react-hook-form";
import { LoginService } from "../services/AuthService";
import { LoginRequest } from "../models/interface";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logger } from "../components/logger";
import { useErrorBoundary } from "react-error-boundary";

export const useLogin = () => {
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginRequest>();

  const onSubmit = async (form: LoginRequest) => {
    await LoginService(form)
      .then((data: any) => {
        if (data?.status === "success") {
          toast.success("Logged in successfully");
          sessionStorage.setItem("token", data?.token);
          navigate("/dashboard", { replace: true });
        } else {
          toast.error(data?.error);
        }
      })
      .catch((error) => {
        logger(error);
        showBoundary(error);
      });
  };

  return {
    errors,
    isSubmitting,
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
};
