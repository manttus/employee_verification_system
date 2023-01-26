import { Routes, Route } from "react-router-dom";
import EmployeeData from "./pages/EmployeeData";
import EmployeeVerify from "./pages/EmployeVerify";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeVerify />} />
      <Route path="verify/:id" element={<EmployeeData />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default App;
