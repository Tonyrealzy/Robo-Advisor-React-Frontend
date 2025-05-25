import React from "react";
import LoadingPage from "../../pages/LoadingPage";
import { useConfirmSignup } from "../../hooks/useConfirmSignup";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const ConfirmSignupLink: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const email = sessionStorage.getItem("email") || "";

  const { loading, handleSubmit } = useConfirmSignup();

  React.useEffect(() => {
    if (!token) {
      toast.error("Invalid or missing token.");
      navigate("/signup", { replace: true });
      return;
    }

    handleSubmit({ email, token });
  }, [token, navigate]);

  return <div>{loading && <LoadingPage />}</div>;
};

export default ConfirmSignupLink;
