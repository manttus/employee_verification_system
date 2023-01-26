import { useParams } from "react-router-dom";

const EmployeeData = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col justify-center h-screen bg-blue-500">
      <div></div>
      <div></div>
    </div>
  );
};

export default EmployeeData;
