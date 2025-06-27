import { toast } from "react-toastify";
import { ConfirmSignUpRequest } from "../models/interface";
import { ConfirmSignupService } from "../services/AuthService";
import { logger } from "../components/logger";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

export const useConfirmSignup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { showBoundary } = useErrorBoundary();

  const handleSubmit = async (payload: ConfirmSignUpRequest) => {
    setLoading(true);
    if (payload.email === "") {
      toast.error("Email not found!");
      navigate("/", { replace: true });
    } else {
      await ConfirmSignupService(payload)
        .then((data: any) => {
          if (data?.status === "success") {
            toast.success("Account confirmed. You can now log in.");
            localStorage.clear();
          } else {
            toast.error(data?.error);
          }
        })
        .catch((error) => {
          logger(error);
          showBoundary(error);
        })
        .finally(() => {
          setLoading(false);
          navigate("/login", { replace: true });
        });
    }
  };

  return {
    loading,
    handleSubmit,
  };
};
