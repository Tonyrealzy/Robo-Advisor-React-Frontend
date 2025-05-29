import React from "react";
import { AuthProvider } from "./AuthContext";
import { ProfileProvider } from "./ProfileContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const AppProviders = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ProfileProvider>{children}</ProfileProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
