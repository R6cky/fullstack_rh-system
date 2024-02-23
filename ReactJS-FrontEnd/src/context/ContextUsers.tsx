import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { CompanyContext } from "./ContextCompanies";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./ContextAuth";
import { iEmployeesUsers } from "../interfaces/interfacesUsers";

export const UserContext = createContext({} as any);

export const UserProvider = ({ children }: any): JSX.Element => {
  const [registeredUsers, setRegisteredUsers] = useState(
    [] as Array<iEmployeesUsers>
  );
  const [usersOutOfWork, setUsersOutOfWork] = useState([] as any);
  const [dataOfUserLogged, setDataOfUserLogged] = useState({} as any);

  const { getDepartmentById, getCompanyById }: any = useContext(CompanyContext);
  const { userIsAuthenticated, isAdmin }: any = useContext(AuthContext);

  const navigate = useNavigate();

  const getRegisteredUser = async (): Promise<void> => {
    const token: string | null = localStorage.getItem("token");

    try {
      const request = await api.get("/employees/readAll", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const reqJson: Array<iEmployeesUsers> = request.data;
      setRegisteredUsers(reqJson);
    } catch (error) {
      console.log(error);
    }
  };

  async function getUserOutOfWork() {
    const token: string | null = localStorage.getItem("token");

    try {
      const request = await api.get("/employees/outOfWork", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsersOutOfWork(request.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataOfUserLogged() {
    const token = localStorage.getItem("token");

    try {
      const request = await api.get("/employees/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDataOfUserLogged(request.data);
      getCompanyById(request.data.company_id);
      getDepartmentById(request.data.department_id);
    } catch (error) {
      console.log(error);
    }
  }

  async function userRegister(data: any) {
    console.log(data);
    try {
      const request = (await api.post(`/employees/create`, data)).data;
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  async function userLogin(data: any) {
    try {
      const request = (await api.post(`/auth/login`, data)).data;
      localStorage.setItem("token", request.authToken);
      localStorage.setItem("isAdmin", request.isAdm);
      if (userIsAuthenticated() && isAdmin() === "false") {
        navigate("/homeUser");
      }
      if (userIsAuthenticated() && isAdmin() === "true") {
        navigate("/homeAdmin");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <UserContext.Provider
      value={{
        registeredUsers,
        getRegisteredUser,
        getUserOutOfWork,
        getDataOfUserLogged,
        userRegister,
        userLogin,
        usersOutOfWork,
        dataOfUserLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
