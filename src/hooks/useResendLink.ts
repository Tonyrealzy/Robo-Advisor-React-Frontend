import { toast } from "react-toastify";
import { PasswordResetRequest } from "../models/interface";
import { ResendLinkService } from "../services/AuthService";
import { logger } from "../components/logger";
import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

export const useResendLink = () => {
  const [loading, setLoading] = useState(false);
  const { showBoundary } = useErrorBoundary();

  const handleSubmit = async (payload: PasswordResetRequest) => {
    setLoading(true);
    if (payload.email === "") {
      toast.error("Email not found!");
      return;
    } else {
      await ResendLinkService(payload)
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
        });
    }
  };

  return {
    loading,
    handleSubmit,
  };
};
