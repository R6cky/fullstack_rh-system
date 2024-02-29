import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { CompanyContext } from "./ContextCompanies";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./ContextAuth";
import {
  iDataUserDefault,
  iDataUserLogin,
  iEmployeesUsers,
  iNotEmployees,
  iRegisterUserData,
  iReturnDataUserLogin,
  iReturnRegisteredUserData,
} from "../interfaces/interfacesUsers";
import { toast } from "react-toastify";

export const UserContext = createContext({} as any);

export const UserProvider = ({ children }: any): JSX.Element => {
  const [registeredUsers, setRegisteredUsers] = useState(
    [] as Array<iEmployeesUsers>
  );
  const [usersOutOfWork, setUsersOutOfWork] = useState(
    [] as Array<iNotEmployees>
  );
  const [dataOfUserLogged, setDataOfUserLogged] = useState(
    {} as iDataUserDefault
  );

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

  async function getUserOutOfWork(): Promise<void> {
    const token: string | null = localStorage.getItem("token");

    try {
      const request = await api.get("/employees/outOfWork", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const reqJson: Array<iNotEmployees> = request.data;
      setUsersOutOfWork(reqJson);
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataOfUserLogged(): Promise<void> {
    const token: string | null = localStorage.getItem("token");

    try {
      const request: any = await api.get("/employees/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const reqJson: iDataUserDefault = request.data;
      setDataOfUserLogged(reqJson);
      getCompanyById(reqJson.company_id);
      getDepartmentById(reqJson.department_id);
    } catch (error) {
      console.log(error);
    }
  }

  async function userRegister(data: iRegisterUserData): Promise<void> {
    try {
      const request: iReturnRegisteredUserData = (
        await api.post(`/employees/create`, data)
      ).data;
      navigate("/login");
      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }

  async function userLogin(data: iDataUserLogin): Promise<void> {
    try {
      const request: iReturnDataUserLogin = (
        await api.post(`/auth/login`, data)
      ).data;
      localStorage.setItem("token", request.authToken);
      localStorage.setItem("isAdmin", JSON.stringify(request.isAdm));

      if (userIsAuthenticated() && isAdmin() === "false") {
        navigate("/homeUser");
      }
      if (userIsAuthenticated() && isAdmin() === "true") {
        navigate("/homeAdmin");
      }
      toast.success("Bem vindo!");
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
