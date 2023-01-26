import React from "react";

const EmployeeContext = React.createContext({
  employee: [],
  setEmployeeData: (data: any) => {},
});

export default EmployeeContext;
