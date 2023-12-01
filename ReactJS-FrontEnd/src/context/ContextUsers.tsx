import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { CompanyContext } from "./ContextCompanies";

export const UserContext = createContext({} as any);

export const UserProvider = ({ children }: any) => {
  const [registeredUsers, setRegisteredUsers] = useState([] as any);
  const [usersOutOfWork, setUsersOutOfWork] = useState([] as any);
  const [dataOfUserLogged, setDataOfUserLogged] = useState({} as any);

  const { getDepartmentById, getCompanyById } = useContext(CompanyContext);

  const getRegisteredUser = async () => {
    const bearerToken: string =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTkyODg3NTgsImV4cCI6MTczMDgyNDc1OCwic3ViIjoiYzlkN2Y0NTgtNWNkOS00M2I2LThjMTItZjk5ZDliNWFkNGY2In0.TGuKZdVBrZHYcfQHBwzA3T3GKXsQqgxkSRGHKGalvwg";

    try {
      const request = await api.get("/employees/readAll", {
        headers: { Authorization: `Bearer ${bearerToken}` },
      });
      setRegisteredUsers(request.data);
    } catch (error) {
      console.log(error);
    }
  };

  async function getUserOutOfWork() {
    const bearerToken: string =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTkyODg3NTgsImV4cCI6MTczMDgyNDc1OCwic3ViIjoiYzlkN2Y0NTgtNWNkOS00M2I2LThjMTItZjk5ZDliNWFkNGY2In0.TGuKZdVBrZHYcfQHBwzA3T3GKXsQqgxkSRGHKGalvwg";

    try {
      const request = await api.get("/employees/outOfWork", {
        headers: { Authorization: `Bearer ${bearerToken}` },
      });
      setUsersOutOfWork(request.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getDataOfUserLogged() {
    const bearerToken: string =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDE0MzMyOTYsImV4cCI6MTczMjk2OTI5Niwic3ViIjoiMzU0YjE1YWUtNzJhYy00NjRjLWFhMTItMGExMzkwOTJhNTY0In0.GirscYSPrXk_RRxk-p-SMj-ftFBcD8UViD0yPr1pMNs";

    try {
      const request = await api.get("/employees/profile", {
        headers: { Authorization: `Bearer ${bearerToken}` },
      });
      setDataOfUserLogged(request.data);
      getCompanyById(request.data.company_id);
      getDepartmentById(request.data.department_id);
    } catch (error) {
      console.log(error);
    }
  }

  async function userRegister(e: any, data: any) {
    e.preventDefault();
    console.log(data);
    try {
      const request = (await api.post(`/employees/create`, data)).data;
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }

  async function userLogin(e: any, data: any) {
    e.preventDefault();
    try {
      const request = (await api.post(`/auth/login`, data)).data;
      console.log(request);
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
