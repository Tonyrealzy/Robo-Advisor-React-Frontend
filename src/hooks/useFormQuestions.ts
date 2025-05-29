import { useForm } from "react-hook-form";
import { AIRequestService } from "../services/AiService";
import { FinancialProduct, RequestForm } from "../models/interface";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logger } from "../components/logger";
import { useErrorBoundary } from "react-error-boundary";
import { useState } from "react";

export const useFormQuestions = () => {
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();
  const [dataToRender, setdataToRender] = useState<FinancialProduct[]>([]);

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
          setdataToRender(data?.data);
          navigate("/result", { replace: true });
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
    dataToRender,
    isSubmitting,
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
};
