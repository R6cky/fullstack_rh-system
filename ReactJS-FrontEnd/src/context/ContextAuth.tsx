import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({} as any);

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();

  const userIsAuthenticated = (): string | null => {
    const userRToken: string | null = localStorage.getItem("token");
    return userRToken;
  };

  const isAdmin = (): string | null => {
    const typeUser: string | null = localStorage.getItem("isAdmin");
    return typeUser;
  };

  const logout = (): void => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ userIsAuthenticated, isAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
