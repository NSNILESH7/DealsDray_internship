import React from "react";
import {
  useGetEmployeeListQuery,
  useDeleteEmployeeMutation,
} from "../redux/api/adminapiSlice";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import imagee from "../../../uploads/image-1731848477498.jpeg";
const EmployeeList = () => {
  const navigate = useNavigate();

  const {
    data: employeeList,
    isLoading,
    error,
    refetch,
  } = useGetEmployeeListQuery();
  console.log(employeeList);

  const [deleteEmployee] = useDeleteEmployeeMutation();

  // useEffect(() => {
  //   refetch();
  // }, [refetch]);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure")) {
      try {
        await deleteEmployee(id);
        refetch();
      } catch (error: any) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Employee List</h1>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>Error</h2>
        ) : (
          <div className="flex flex-col md:flex-row">
            {/* <AdminMenu /> */}
            <table className="w-full md:w-4/5 mx-auto border-2 border-black">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">ID</th>
                  <th className="px-4 py-2 text-left">IMAGE</th>
                  <th className="px-4 py-2 text-left">NAME</th>
                  <th className="px-4 py-2 text-left">EMAIL</th>
                  <th className="px-4 py-2 text-left">MOBILE</th>
                  <th className="px-4 py-2 text-left">DESIGNATION</th>
                  <th className="px-4 py-2 text-left">GENDER</th>
                  <th className="px-4 py-2 text-left">COURSE</th>
                  <th className="px-4 py-2 text-left">CREATED AT</th>
                  <th className="px-4 py-2 text-left">ACTION</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="text-black text-center text-lg ">
                {employeeList.map((emp: any) => (
                  <tr key={emp._id}>
                    <td className="px-4 py-2 border-2 border-black">
                      {emp._id}
                    </td>
                    <td className="px-4 py-2 border-2 border-black">
                      <div className="flex items-center">
                        <img
                          src={emp.image}
                          alt={emp.name}
                          className="w-full h-12 rounded-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2 border-2 border-black    ">
                      <div className="flex items-center">
                        <h5 className="w-full p-2 border rounded-lg">
                          {emp.name}
                        </h5>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-2 border-black        ">
                      <div className="flex items-center">
                        <h5 className="w-full p-2 border rounded-lg">
                          {emp.email}
                        </h5>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-2 border-black">
                      <div className="flex items-center">
                        <h5 className="w-full p-2 border rounded-lg">
                          {emp.phone}
                        </h5>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-2 border-black">
                      <div className="flex items-center">
                        <h5 className="w-full p-2 border rounded-lg">
                          {emp.designation}
                        </h5>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-2 border-black">
                      <div className="flex items-center">
                        <h5 className="w-full p-2 border rounded-lg">
                          {emp.gender}
                        </h5>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-2 border-black">
                      <div className="flex items-center">
                        <h5 className="w-full p-2 border rounded-lg">
                          {emp.course}
                        </h5>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-2 border-black">
                      <div className="flex items-center">
                        <h5 className="w-full p-2 border rounded-lg">
                          {emp.createdAt}
                        </h5>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-b-2 border-black">
                      <div className="flex items-center space-x-2 ">
                        <button
                          type="button"
                          onClick={() => navigate(`/update/${emp._id}`)}
                          className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5"
                        >
                          edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(emp._id)}
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeList;
