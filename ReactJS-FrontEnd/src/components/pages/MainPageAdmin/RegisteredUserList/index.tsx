import { useContext } from "react";
import { RegisteredUserCard } from "./RegisteredUserCard";
import { StyleRegisteredUserlist } from "./style";
import { UserContext } from "../../../../context/ContextRegisteredusers";
import { UserEdit } from "../../../Modals/UserEdit";
import { ModalContext } from "../../../../context/ContextModals";
import { RemoveUser } from "../../../Modals/UserRemove";

export const RegisteredUserlist = () => {
  const { registeredUsers } = useContext(UserContext);
  const { modalUserDelete } = useContext(ModalContext);

  return (
    <StyleRegisteredUserlist>
      {registeredUsers.map((user: any) => (
        <RegisteredUserCard user={user} key={user.id} />
      ))}

      {modalUserDelete ? <RemoveUser /> : null}
    </StyleRegisteredUserlist>
  );
};
