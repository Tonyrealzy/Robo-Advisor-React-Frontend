import { useForm } from "react-hook-form";
import { ChangePasswordService } from "../services/AuthService";
import { ChangePasswordFormFields } from "../models/interface";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logger } from "../components/logger";
import { useErrorBoundary } from "react-error-boundary";

export const useChangePassword = (token: string) => {
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ChangePasswordFormFields>();

  const onSubmit = async (form: ChangePasswordFormFields) => {
    const { confirmPassword, ...payload } = form;
    const requestBody = { ...payload, token };
    await ChangePasswordService(requestBody)
      .then((data: any) => {
        if (data?.status === "success") {
          toast.success(data?.message);
          navigate("/", { replace: true });
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
    watch,
    handleSubmit: handleSubmit(onSubmit),
  };
};
