import { useContext } from "react";
import { RegisteredUserCard } from "./RegisteredUserCard";
import { StyleRegisteredUserlist } from "./style";
import { UserContext } from "../../../../context/ContextRegisteredusers";

export const RegisteredUserlist = () => {
  const { registeredUsers } = useContext(UserContext);

  return (
    <StyleRegisteredUserlist>
      {registeredUsers.map((user: any) => (
        <RegisteredUserCard user={user} key={user.id} />
      ))}
    </StyleRegisteredUserlist>
  );
};
