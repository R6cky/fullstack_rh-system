import { RegisteredUserCard } from "./RegisteredUserCard";
import { StyleRegisteredUserlist } from "./style";

export const RegisteredUserlist = () => {
  return (
    <StyleRegisteredUserlist>
      <RegisteredUserCard />
      <RegisteredUserCard />
    </StyleRegisteredUserlist>
  );
};
