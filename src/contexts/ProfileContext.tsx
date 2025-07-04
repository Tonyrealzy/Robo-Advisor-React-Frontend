import { createContext, ReactNode, useContext } from "react";
import { useAuth } from "./AuthContext";
import { GetProfileService } from "../services/AuthService";
import { decryptData, encryptData } from "../utils/encryption";
import { useQuery } from "@tanstack/react-query";

interface Profile {
  username: string | null;
  firstname: string | null;
  lastname: string | null;
  isActive: boolean | null;
}

interface ProfileContextType {
  profile: Profile | null;
  username: string | null;
  isPending: boolean;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

interface ProfileProviderProps {
  children: ReactNode;
}

const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const { email } = useAuth();

  let decryptedEmail = "";
  if (email) {
    decryptedEmail = decryptData(email);
  }

  const { isPending, data: profile } = useQuery({
    queryKey: ["getProfile", decryptedEmail],
    queryFn: () => GetProfileService({ email: decryptedEmail }),
    enabled: decryptedEmail !== "" && window.location.pathname === "/dashboard",
    retry: 2,
  });

  profile && sessionStorage.setItem("username", encryptData(profile?.username));
  const encryptedUsername = sessionStorage.getItem("username");
  let username = "";
  if (encryptedUsername) {
    username = decryptData(encryptedUsername);
  }

  return (
    <ProfileContext.Provider value={{ isPending, profile, username }}>
      {children}
    </ProfileContext.Provider>
  );
};

const useGetProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useGetProfile must be used within an AuthProvider");
  }
  return context;
};

export { ProfileProvider, useGetProfile };
