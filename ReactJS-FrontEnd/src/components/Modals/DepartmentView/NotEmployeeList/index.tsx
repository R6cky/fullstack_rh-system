import { useContext, useEffect, useState } from "react";
import { NotEmployeeCard } from "./NotEmployeeCard";
import { StyleNotEmployeeList } from "./style";
import { ModalContext } from "../../../../context/ContextModals";
import { UserContext } from "../../../../context/ContextUsers";
import { EmployeeRemove } from "../../EmployeeRemove";
import { iDataUserDefault } from "../../../../interfaces/interfacesUsers";

export const NotEmployeeList = (): JSX.Element => {
  const { dataRequest, modalUserEmployeeRemove } = useContext(ModalContext);
  const { registeredUsers } = useContext(UserContext);

  const [data, setData] = useState({} as any);

  useEffect(() => {
    setData(dataRequest);
  }, []);

  return (
    <StyleNotEmployeeList>
      {registeredUsers.map((user: iDataUserDefault) =>
        user.department_id === data.id ? (
          <NotEmployeeCard key={user.id} userData={user} />
        ) : null
      )}
      {modalUserEmployeeRemove ? <EmployeeRemove /> : false}
    </StyleNotEmployeeList>
  );
};
