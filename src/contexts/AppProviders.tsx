import React from "react";
import { AuthProvider } from "./AuthContext";
import { ProfileProvider } from "./ProfileContext";

interface Props {
  children: React.ReactNode;
}

const AppProviders = ({ children }: Props) => {
  return (
    <AuthProvider>
      <ProfileProvider>{children}</ProfileProvider>
    </AuthProvider>
  );
};

export default AppProviders;
