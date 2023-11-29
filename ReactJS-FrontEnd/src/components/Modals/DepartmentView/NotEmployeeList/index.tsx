import { useContext } from "react";
import { NotEmployeeCard } from "./NotEmployeeCard";
import { StyleNotEmployeeList } from "./style";
import { ModalContext } from "../../../../context/ContextModals";
import { UserContext } from "../../../../context/ContextUsers";
import { EmployeeRemove } from "../../EmployeeRemove";

export const NotEmployeeList = () => {
  const { dataRequest, modalUserEmployeeRemove } = useContext(ModalContext);
  const { registeredUsers } = useContext(UserContext);

  return (
    <StyleNotEmployeeList>
      {registeredUsers.map((user: any) =>
        user.department_id === dataRequest.id ? (
          <NotEmployeeCard key={user.id} userData={user} />
        ) : null
      )}
      {modalUserEmployeeRemove ? <EmployeeRemove /> : false}
    </StyleNotEmployeeList>
  );
};
