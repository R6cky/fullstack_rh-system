import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { CompanyContext } from "./ContextCompanies";
import { UserContext } from "./ContextUsers";

export const ModalContext = createContext({} as any);

export const ModalProvider = ({ children }: any) => {
  const [modalDepartmentView, setModalDepartmentView] = useState(false);
  const [modalDepartmentCreate, setModalDepartmentCreate] = useState(false);
  const [modalDepartmentEdit, setModalDepartmentEdit] = useState(false);
  const [modalDepartmentRemove, setModalDepartmentRemove] = useState(false);
  const [modalUserEdit, setModalUserEdit] = useState(false);
  const [modalUserDelete, setModalUserDelete] = useState(false);
  const [modalUserEmployeeRemove, setModalUserEmployeeRemove] = useState(false);
  const [dataRequest, setDataRequest] = useState("");

  const {
    setDepartmentsByCompany,
    departmentsByCompany,
    getDepartmentByCompany,
  } = useContext(CompanyContext);

  const { getRegisteredUser, getUserOutOfWork } = useContext(UserContext);

  function activateModal(
    modalState: any,
    setModalState: any,
    data: any = null
  ) {
    if (data !== null) {
      setDataRequest(data);
    }
    if (modalState) {
      setModalState(false);
    } else {
      setModalState(true);
    }
  }

  async function departmentCreate(data: any) {
    const token = localStorage.getItem("token");
    try {
      const request = (
        await api.post("/departments/create", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data;
      setDepartmentsByCompany([...departmentsByCompany, request]);
      activateModal(modalDepartmentCreate, setModalDepartmentCreate);
      console.log(request);
    } catch (error) {
      console.log(error);
    }
  }

  async function departmentEdit(e: any, id: any, data: any) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const request = (
        await api.patch(`/departments/update/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data;

      const departmentsByCompanyUpdated = await getDepartmentByCompany(
        request.department.company_id
      );
      setDepartmentsByCompany(departmentsByCompanyUpdated);
      activateModal(modalDepartmentEdit, setModalDepartmentEdit);
    } catch (error) {
      console.log(error);
    }
  }

  async function departmentRemove(e: any, departmentData: any) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(departmentData);
    try {
      await api.delete(`/departments/delete/${departmentData.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const departmentsByCompanyUpdated = await getDepartmentByCompany(
        departmentData.company_id
      );
      setDepartmentsByCompany(departmentsByCompanyUpdated);
      activateModal(modalDepartmentRemove, setModalDepartmentRemove);
    } catch (error) {
      console.log(error);
    }
  }

  async function userEdit(e: any, data: any, id: any) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await api.patch(`/employees/updateEmployee/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await getRegisteredUser();
      activateModal(modalUserEdit, setModalUserEdit);
    } catch (error) {
      console.log(error);
    }
  }

  async function userRemove(e: any, id: any) {
    e.preventDefault();

    const token = localStorage.getItem("token");
    try {
      await api.delete(`/employees/deleteEmployee/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await getRegisteredUser();
      activateModal(modalUserDelete, setModalUserDelete);
    } catch (error) {
      console.log(error);
    }
  }

  async function employeeDisconnect(e: any, id: any) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await api.patch(
        `/employees/dismissEmployee/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      getRegisteredUser();
      getUserOutOfWork();
      activateModal(modalUserEmployeeRemove, setModalUserEmployeeRemove);
    } catch (error) {
      console.log(error);
    }
  }

  async function toHire(e: any, data: any, id: any) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const request = (
        await api.patch(`/employees/hireEmployee/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data;
      getUserOutOfWork();
      getRegisteredUser();
      console.log(request);
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
        dataRequest,
        modalUserEmployeeRemove,
        setModalUserEmployeeRemove,
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
        setDataRequest,
        departmentRemove,
        userRemove,
        //departmentView,
        employeeDisconnect,
        toHire,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
