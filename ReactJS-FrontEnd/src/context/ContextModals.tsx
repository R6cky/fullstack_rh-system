import { createContext, useState } from "react";

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
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
