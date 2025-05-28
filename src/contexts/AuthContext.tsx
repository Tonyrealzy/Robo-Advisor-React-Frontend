import { createContext, ReactNode, useContext, useState } from "react";
import { encryptData } from "../utils/encryption";

interface AuthContextType {
  email: string | null;
  token: string | null;
  login: (token: string, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(() => {
    return sessionStorage.getItem("token");
  });
  const [email, setEmail] = useState<string | null>(() => {
    return sessionStorage.getItem("email");
  });

  const login = (newToken: string, newEmail: string) => {
    sessionStorage.setItem("token", encryptData(newToken));
    sessionStorage.setItem("email", encryptData(newEmail));
    setToken(encryptData(newToken));
    setEmail(encryptData(newEmail));
  };

  const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ email, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
