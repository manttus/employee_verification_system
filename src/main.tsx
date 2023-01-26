import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../dist/output.css";
import { BrowserRouter } from "react-router-dom";
import EmployeeProvider from "./store/emp-provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </BrowserRouter>
);
