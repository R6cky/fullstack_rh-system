import { createContext, useContext, useState } from "react";

export const LoadContext = createContext({} as any);

export const UserProvider = ({ children }: any): JSX.Element => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadContext.Provider>
  );
};
