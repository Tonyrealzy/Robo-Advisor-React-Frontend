import { toast } from "react-toastify";
import { LogoutRequest } from "../models/interface";
import { LogoutService } from "../services/AuthService";
import { logger } from "../components/logger";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useAuth } from "../contexts/AuthContext";

export const useLogout = () => {
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();
  const [loading, setLoading] = useState(false);
  const { logout } = useAuth();

  const handleSubmit = async (payload: LogoutRequest) => {
    setLoading(true);
    if (payload.email === "") {
      toast.error("Invalid email supplied");
      logout();
      navigate("/", { replace: true });
      return;
    } else {
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
          logout();
          navigate("/", { replace: true });
        });
    }
  };

  return {
    loading,
    handleSubmit,
  };
};
