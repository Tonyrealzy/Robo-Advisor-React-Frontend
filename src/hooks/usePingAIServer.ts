import { toast } from "react-toastify";
import { logger } from "../components/logger";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { CheckAIApiHealth } from "../services/ApiHealth";

export const usePingAIServer = () => {
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await CheckAIApiHealth()
      .then((data: any) => {
        if (data?.status === 200) {
          navigate("/forms");
        } else {
          toast.error("Failed to load AI service.");
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
