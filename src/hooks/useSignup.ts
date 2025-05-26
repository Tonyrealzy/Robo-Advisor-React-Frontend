import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SignupService } from "../services/AuthService";
import { SignupFormFields } from "../models/interface";
import { logger } from "../components/logger";
import { useErrorBoundary } from "react-error-boundary";

export const useSignup = () => {
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormFields>();

  const onSubmit = async (form: SignupFormFields) => {
    const { confirmPassword, ...payload } = form;
    await SignupService(payload)
      .then((data: any) => {
        if (data?.status === "success") {
          sessionStorage.setItem("username", form.username);
          sessionStorage.setItem("email", form.email);
          toast.success(
            `Account created! A confirmation link was sent to ${form.email}. Please verify to complete signup.`
          );
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
