import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { MainPageAdmin } from "../components/pages/MainPageAdmin";
import { MainPageUser } from "../components/pages/MainPageUser";
import { DepartmentView } from "../components/Modals/DepartmentView";
import { DepartmentCreate } from "../components/Modals/DepartmentCreate";
import { DepartmentEdit } from "../components/Modals/DepartmentEdit";
import { DepartmentRemove } from "../components/Modals/DepartmentRemove";
import { UserEdit } from "../components/Modals/UserEdit";
import { RemoveUser } from "../components/Modals/UserRemove";

export const RoutesMain: any = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/homeAdmin" element={<MainPageAdmin />} />
      <Route path="/homeUser" element={<MainPageUser />} />
      <Route path="/dview" element={<DepartmentView />} />
      <Route path="/dcreate" element={<DepartmentCreate />} />
      <Route path="/dedit" element={<DepartmentEdit />} />
      <Route path="/dremove" element={<DepartmentRemove />} />
      <Route path="/uedit" element={<UserEdit />} />
      <Route path="/uremove" element={<RemoveUser />} />
    </Routes>
  );
};
