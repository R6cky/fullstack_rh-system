import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { MainPageAdmin } from "../components/pages/MainPageAdmin";
import { MainPageUser } from "../components/pages/MainPageUser";
import { AuthContext } from "../context/ContextAuth";

export const RoutesMain: any = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/homeAdmin" element={<MainPageAdmin />} />
      <Route path="/homeUser" element={<MainPageUser />} />
    </Routes>
  );
};
