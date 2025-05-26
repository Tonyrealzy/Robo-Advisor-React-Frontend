import { toast } from "react-toastify";
import { PasswordResetRequest } from "../models/interface";
import { PasswordResetService } from "../services/AuthService";
import { logger } from "../components/logger";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useErrorBoundary } from "react-error-boundary";

export const useForgotPassword = () => {
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PasswordResetRequest>();

  const onSubmit = async (payload: PasswordResetRequest) => {
    await PasswordResetService(payload)
      .then((data: any) => {
        if (data?.status === "success") {
          sessionStorage.setItem("resetEmail", payload.email);
          toast.success(
            `Password reset successful. A confirmation link was sent to ${payload.email}.`
          );
        } else {
          toast.error(data?.error);
        }
      })
      .catch((error) => {
        logger(error);
        showBoundary(error);
      })
      .finally(() => {
        navigate("/login", { replace: true });
      });
  };

  return {
    errors,
    isSubmitting,
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
};
