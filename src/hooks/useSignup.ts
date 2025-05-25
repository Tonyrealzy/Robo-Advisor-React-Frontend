import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SignupService } from "../services/AuthService";
import { SignupFormFields } from "../models/interface";
import { logger } from "../components/logger";

export const useSignup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormFields>();

  const onSubmit = async (form: SignupFormFields) => {
    const { confirmPassword, ...payload } = form;
    // store the email address and username in the Context for the future...

    await SignupService(payload)
      .then((data: any) => {
        if (data?.status === "success") {
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
