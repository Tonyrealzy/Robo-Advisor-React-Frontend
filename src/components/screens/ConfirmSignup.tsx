import React from "react";
import LoadingPage from "../../pages/LoadingPage";
import { useConfirmSignup } from "../../hooks/useConfirmSignup";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const ConfirmSignup: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const { loading, handleSubmit } = useConfirmSignup();

  React.useEffect(() => {
    if (!token) {
      toast.error("Invalid or missing token.");
      navigate("/signup", { replace: true });
      return;
    }

    handleSubmit({ email: "umehobiarinze2@gmail.com", token });
  }, [token, navigate]);

  return <div>{loading && <LoadingPage />}</div>;
};

export default ConfirmSignup;
