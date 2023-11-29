import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const UserContext = createContext({} as any);

export const UserProvider = ({ children }: any) => {
  const [registeredUsers, setRegisteredUsers] = useState([] as any);
  const [usersOutOfWork, setUsersOutOfWork] = useState([] as any);
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
      console.log(request.data);
      setUsersOutOfWork(request.data);
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
        usersOutOfWork,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
