import { createContext, useState } from "react";
import { api } from "../services/api";

export const ModalContext = createContext({} as any);

export const ModalProvider = ({ children }: any) => {
  const [modalDepartmentView, setModalDepartmentView] = useState(false);
  const [modalDepartmentCreate, setModalDepartmentCreate] = useState(false);
  const [modalDepartmentEdit, setModalDepartmentEdit] = useState(false);
  const [modalDepartmentRemove, setModalDepartmentRemove] = useState(false);
  const [modalUserEdit, setModalUserEdit] = useState(false);
  const [modalUserDelete, setModalUserDelete] = useState(false);

  function activateModal(modalState: any, setModalState: any) {
    if (modalState) {
      setModalState(false);
    } else {
      setModalState(true);
    }
  }

  async function departmentCreate(e: any, data: any) {
    e.preventDefault();
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTk4MTQxOTQsImV4cCI6MTczMTM1MDE5NCwic3ViIjoiYzlkN2Y0NTgtNWNkOS00M2I2LThjMTItZjk5ZDliNWFkNGY2In0.mu1zWkUsB6w2fMC9xjNB_ftIWoN9p2CkYSjxNaST0rk";
    try {
      const request = (
        await api.post("/departments/create", data, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        })
      ).data;
      activateModal(modalDepartmentCreate, setModalDepartmentCreate);
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }

  async function departmentEdit(e: any, id: any, data: any) {
    e.preventDefault();
    console.log(id);
    console.log(data);
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTk4MTQxOTQsImV4cCI6MTczMTM1MDE5NCwic3ViIjoiYzlkN2Y0NTgtNWNkOS00M2I2LThjMTItZjk5ZDliNWFkNGY2In0.mu1zWkUsB6w2fMC9xjNB_ftIWoN9p2CkYSjxNaST0rk";
    // try {
    //   const request = (
    //     await api.patch(`/departments/update/${id}`, data, {
    //       headers: {
    //         Authorization: `Bearer ${bearerToken}`,
    //       },
    //     })
    //   ).data;
    //   console.log(request);
    //   activateModal(modalDepartmentEdit, setModalDepartmentEdit);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  async function userEdit(e: any, data: any, id: any) {
    e.preventDefault();
    console.log(data);
    const bearerToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTk4MTQxOTQsImV4cCI6MTczMTM1MDE5NCwic3ViIjoiYzlkN2Y0NTgtNWNkOS00M2I2LThjMTItZjk5ZDliNWFkNGY2In0.mu1zWkUsB6w2fMC9xjNB_ftIWoN9p2CkYSjxNaST0rk";
    try {
      const request = (
        await api.patch(`/employees/updateEmployee/${id}`, data, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        })
      ).data;
      console.log(request);
      activateModal(modalUserEdit, setModalUserEdit);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ModalContext.Provider
      value={{
        modalDepartmentView,
        modalDepartmentCreate,
        modalDepartmentEdit,
        modalDepartmentRemove,
        modalUserEdit,
        modalUserDelete,
        setModalDepartmentView,
        setModalDepartmentCreate,
        setModalDepartmentEdit,
        setModalDepartmentRemove,
        setModalUserEdit,
        setModalUserDelete,
        activateModal,
        departmentCreate,
        departmentEdit,
        userEdit,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
