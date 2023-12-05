import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({} as any);

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();

  const userIsAuthenticated = () => {
    const userRToken = localStorage.getItem("token");
    return userRToken;
  };

  const isAdmin = () => {
    const typeUser = localStorage.getItem("isAdmin");
    return typeUser;
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ userIsAuthenticated, isAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
