import { toast } from "react-toastify";
import { LogoutRequest } from "../models/interface";
import { LogoutService } from "../services/AuthService";
import { logger } from "../components/logger";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

export const useLogout = () => {
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (payload: LogoutRequest) => {
    setLoading(true);
    await LogoutService(payload)
      .then((data: any) => {
        if (data?.status === "success") {
          toast.success(data?.message);
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
        sessionStorage.clear();
        localStorage.clear();
        navigate("/", { replace: true });
      });
  };

  return {
    loading,
    handleSubmit,
  };
};
