import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const EmployeeVerify = () => {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState<string>("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/verify/${employeeId}`);
    setEmployeeId("");
  };
  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeId(e.target.value);
  };
  return (
    <div className="flex h-screen justify-between items-center flex-col p-5">
      <div className="h-1/6 w-full  items-center "></div>
      <div className="h-11/12 w-card-width min-w-card-width bg-white border rounded-md border-gray-200 shadow-lg shadow-grey flex flex-col justify-between py-5">
        <div className="w-full h-1/6 flex flex-col justify-center items-center border-b-1 border-black py-5">
          <div>
            <img src={logo} className=" h-8" />
          </div>
          <div className="w-full mt-5">
            <hr className="w-full" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex w-80 flex-col justify-start ml-5">
            <h1 className="text-lg"> Employement Verification </h1>
            <h4 className="text-sm text-gray-500 mt-2">
              Please enter the employee ID to verify below
            </h4>
            <form onSubmit={submitHandler} className="pt-5">
              <label className="text-sm mt-5">Employee ID: </label>
              <input
                type="text"
                className="w-11/12 shadow-inner p-4 shadow-slate-100 h-10 bg-gray-100 border-black focus:outline-none mt-2"
                value={employeeId}
                onChange={searchChangeHandler}
              />
              <p className="text-sm text-gray-500 mt-2">
                Do not include "-" ex: 2101SC1010
              </p>
              <button className="w-11/12 h-10 mt-3 rounded-md focus: outline-none text-white bg-primary-color hover:scale-105">
                Check ID Status
              </button>
            </form>
          </div>
        </div>
        <div></div>
      </div>
      <div className="h-1/6 flex w-full"></div>
    </div>
  );
};
export default EmployeeVerify;
