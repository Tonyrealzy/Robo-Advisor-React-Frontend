import { useForm } from "react-hook-form";
import { AIRequestService } from "../services/AiService";
import { RequestForm } from "../models/interface";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logger } from "../components/logger";
import { useErrorBoundary } from "react-error-boundary";

export const useFormQuestions = () => {
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RequestForm>();

  const onSubmit = async (form: RequestForm) => {
    await AIRequestService(form)
      .then((data: any) => {
        if (data?.status === "success") {
          toast.success("Request successful");
          navigate("/result", { replace: true, state: data?.data });
        } else {
          toast.error(data?.error);
          navigate("/dashboard", { replace: true });
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
