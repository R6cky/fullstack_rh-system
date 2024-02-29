import { createContext } from "react";
import { toast } from "react-toastify";

export const ToastContext = createContext({} as any);

export const ToastProvider = ({ children }: any) => {
  const notify = () => toast.success("Wow so easy!");

  return (
    <ToastContext.Provider value={{ notify }}>{children}</ToastContext.Provider>
  );
};
