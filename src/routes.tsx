import { Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Tecnologias from "./pages/Tecnologias";
import ProPage from "./pages/Pro";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tecnologias" element={<Tecnologias />}/>
      <Route path="/exp/pro" element={<ProPage />} />
    </Routes>
  );
}