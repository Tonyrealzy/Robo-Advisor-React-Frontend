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
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<RequestForm>();

  const onSubmit = async (form: RequestForm) => {
    if (
      form.age === 0 ||
      form.amount === 0 ||
      form.currency === "" ||
      form.investmentHorizon === 0 ||
      form.investmentKnowledge === "" ||
      form.riskTolerance === "" ||
      form.location === "" ||
      form.investmentPurpose === ""
    ) {
      toast.error("All fields are required!");
      return;
    } else {
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
    }
  };

  return {
    errors,
    isSubmitting,
    trigger,
    register,
    handleSubmit: handleSubmit(onSubmit),
  };
};
