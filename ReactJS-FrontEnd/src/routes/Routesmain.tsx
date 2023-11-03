import { Route, Routes } from "react-router-dom";
import { MainPageDefault } from "../components/pages/MainPageDefault";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { MainPageAdmin } from "../components/pages/MainPageAdmin";

export const RoutesMain: any = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPageDefault />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/homeAdmin" element={<MainPageAdmin />} />
    </Routes>
  );
};
