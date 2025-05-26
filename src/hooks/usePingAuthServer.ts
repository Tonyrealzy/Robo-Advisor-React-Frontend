import { toast } from "react-toastify";
import { logger } from "../components/logger";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { CheckAuthApiHealth } from "../services/ApiHealth";

export const usePingAuthServer = () => {
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await CheckAuthApiHealth()
      .then((data: any) => {
        if (data?.status === 200) {
          navigate("/login");
        } else {
          toast.error("An error occurred while processing your request.");
        }
      })
      .catch((error) => {
        logger(error);
        showBoundary(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    loading,
    handleSubmit,
  };
};
