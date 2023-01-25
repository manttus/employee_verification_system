import { Routes, Route } from "react-router-dom";
import EmployeeVerify from "./pages/EmployeVerify";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<EmployeeVerify />} />
    </Routes>
  );
};

export default App;
