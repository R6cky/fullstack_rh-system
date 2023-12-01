import { useContext, useEffect, useState } from "react";
import { NotEmployeeList } from "./NotEmployeeList";
import { StyleDepartmentView } from "./style";
import { ModalContext } from "../../../context/ContextModals";
import { UserContext } from "../../../context/ContextUsers";
import { CompanyContext } from "../../../context/ContextCompanies";

export const DepartmentView = () => {
  const {
    activateModal,
    modalDepartmentView,
    setModalDepartmentView,
    dataRequest,
    toHire,
  } = useContext(ModalContext);
  const { companies } = useContext(CompanyContext);

  const { getUserOutOfWork, usersOutOfWork } = useContext(UserContext);

  const [data, setData] = useState({} as any);

  const [idToHire, setidToHire] = useState({});

  useEffect(() => {
    getUserOutOfWork();
    setData(dataRequest);
  }, []);

  return (
    <StyleDepartmentView>
      <div className="data-modal-view">
        <div className="close-modal">
          <span
            className="btn-close-modal"
            onClick={() => {
              return activateModal(modalDepartmentView, setModalDepartmentView);
            }}
          >
            X
          </span>
        </div>
        <div className="header-modal">
          <h3 className="department-name">{data.name}</h3>
          <span className="department-description">{data.description}</span>
          {companies.map((company: any) =>
            company.id === data.company_id ? (
              <span className="department-owner" key={company.id}>
                {company.name}
              </span>
            ) : (
              false
            )
          )}
        </div>

        <div className="select-area">
          <select name="" id="" onChange={(e) => setidToHire(e.target.value)}>
            <option value="">Selecionar usuário</option>
            {usersOutOfWork.map((user: any) => {
              return (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
          <button
            className="btn-hire"
            onClick={(e) => toHire(e, { department_id: data.id }, idToHire)}
          >
            Contratar
          </button>
        </div>
      </div>

      <NotEmployeeList />
    </StyleDepartmentView>
  );
};
