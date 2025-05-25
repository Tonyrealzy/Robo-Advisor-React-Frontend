import React, { useState } from "react";
import LoadingPage from "../../pages/LoadingPage";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPasswordLink: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    if (!token) {
      toast.error("Invalid or missing token.");
      navigate("/reset", { replace: true });
      return;
    }

    setLoading(false);
    navigate("/password", { replace: true, state: token });
  }, [token, navigate]);

  return <div>{loading && <LoadingPage />}</div>;
};

export default ResetPasswordLink;
