import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { CompanyContext } from "./ContextCompanies";
import { UserContext } from "./ContextUsers";
import {
  iDepartmentCreate,
  iDepartmentEdit,
  iMessageRemoveDepartment,
  iReturnUserEdit,
  iUserEdit,
} from "../interfaces/interfacesModals";
import { iDepartments } from "../interfaces/interfacesContextCompanies";
import { toast } from "react-toastify";

export const ModalContext = createContext({} as any);

export const ModalProvider = ({ children }: any) => {
  const [modalDepartmentView, setModalDepartmentView] = useState(
    false as boolean
  );
  const [modalDepartmentCreate, setModalDepartmentCreate] = useState(
    false as boolean
  );
  const [modalDepartmentEdit, setModalDepartmentEdit] = useState(
    false as boolean
  );
  const [modalDepartmentRemove, setModalDepartmentRemove] = useState(
    false as boolean
  );
  const [modalUserEdit, setModalUserEdit] = useState(false as boolean);
  const [modalUserDelete, setModalUserDelete] = useState(false as boolean);
  const [modalUserEmployeeRemove, setModalUserEmployeeRemove] = useState(
    false as boolean
  );
  const [dataRequest, setDataRequest] = useState({} as any);

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
  ): void {
    if (data !== null) {
      setDataRequest(data);
    }
    if (modalState) {
      setModalState(false);
    } else {
      setModalState(true);
    }
  }

  async function departmentCreate(data: iDepartmentCreate) {
    const token: string | null = localStorage.getItem("token");
    try {
      const request: iDepartmentCreate = (
        await api.post("/departments/create", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data;
      setDepartmentsByCompany([...departmentsByCompany, request]);
      activateModal(modalDepartmentCreate, setModalDepartmentCreate);
      toast.success("Departamento criado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }

  async function departmentEdit(id: string, data: iDepartmentEdit) {
    const token = localStorage.getItem("token");
    try {
      const request: any = (
        await api.patch(`/departments/update/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data;
      setDataRequest(request.id);
      const departmentsByCompanyUpdated = await getDepartmentByCompany(
        request.department.company_id
      );
      setDepartmentsByCompany(departmentsByCompanyUpdated);
      activateModal(modalDepartmentEdit, setModalDepartmentEdit);
      toast.success("Departamento editado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }

  async function departmentRemove(departmentData: any) {
    const token: string | null = localStorage.getItem("token");
    try {
      const request: iMessageRemoveDepartment = await api.delete(
        `/departments/delete/${departmentData.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const departmentsByCompanyUpdated: Array<iDepartments> =
        await getDepartmentByCompany(departmentData.company_id);
      setDepartmentsByCompany(departmentsByCompanyUpdated);
      activateModal(modalDepartmentRemove, setModalDepartmentRemove);
      toast.success("Departamento removido com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }

  async function userEdit(id: string, data: iUserEdit) {
    const token: string | null = localStorage.getItem("token");
    try {
      const request: any = await api.patch(
        `/employees/updateEmployee/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const reqJson: iReturnUserEdit = request.data;
      getRegisteredUser();
      activateModal(modalUserEdit, setModalUserEdit);
      toast.success("Usuário editado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }

  async function userRemove(e: any, id: string) {
    e.preventDefault();

    const token: string | null = localStorage.getItem("token");
    try {
      await api.delete(`/employees/deleteEmployee/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await getRegisteredUser();
      activateModal(modalUserDelete, setModalUserDelete);
      toast.success("Usuário descadastrado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }

  async function employeeDisconnect(e: any, id: string) {
    e.preventDefault();
    const token: string | null = localStorage.getItem("token");
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
      toast.success("Demissão realizada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  }

  async function toHire(e: any, data: any, id: string): Promise<void> {
    e.preventDefault();
    const token: string | null = localStorage.getItem("token");

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
      toast.success("Contratação realizada com sucesso!");
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
