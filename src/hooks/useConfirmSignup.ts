import { toast } from "react-toastify";
import { ConfirmSignUpRequest } from "../models/interface";
import { ConfirmSignupService } from "../services/AuthService";
import { logger } from "../components/logger";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useConfirmSignup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (payload: ConfirmSignUpRequest) => {
    setLoading(true);
    await ConfirmSignupService(payload)
      .then((data: any) => {
        if (data?.status === "success") {
          toast.success("Account confirmed. You can now log in.");
          navigate("/login", { replace: true });
        } else {
          toast.error(data?.error);
        }
      })
      .catch((error) => {
        logger(error);
      })
      .finally(() => setLoading(false));
  };

  return {
    loading,
    handleSubmit,
  };
};
