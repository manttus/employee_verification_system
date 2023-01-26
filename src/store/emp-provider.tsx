import { useReducer } from "react";

import EmployeeContext from "./emp-context";

const defaultEmployeeState = {
  employees: [],
};

const employeeReducer = (state: any, action: any) => {
  if (action.type === "ADD") {
    const newEmployee = action.employee;
    const updatedEmployees = state.employees.concat(newEmployee);
    return {
      employees: updatedEmployees,
    };
  }
  return defaultEmployeeState;
};

const EmployeeProvider = (props: any) => {
  const [employeeState, dispatchEmployeeAction] = useReducer(
    employeeReducer,
    defaultEmployeeState
  );
  const setEmployeeData = (employee: any) => {
    dispatchEmployeeAction({ type: "ADD", employee: employee });
  };
  const employeeContext = {
    employee: employeeState.employees,
    setEmployeeData: setEmployeeData,
  };
  return (
    <EmployeeContext.Provider value={employeeContext}>
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
