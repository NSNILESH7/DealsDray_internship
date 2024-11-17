import React, { useEffect, useState } from "react";
import {
  useGetEmployeeByIdQuery,
  useUpdateEmployeeMutation,
} from "../redux/api/adminapiSlice";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: employee, isLoading, error } = useGetEmployeeByIdQuery(id);


  const [name, setName] = useState(employee?.name || "");
  const [email, setEmail] = useState(employee?.email || "");
  const [phone, setPhone] = useState(employee?.phone || "");
  const [designation, setDesignation] = useState(employee?.designation || "");
  const [course, setCourse] = useState(employee?.course || "");
  const [gender, setGender] = useState(employee?.gender || "");
  const [image, setImage] = useState(employee?.image || "");

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setEmail(employee.email);
      setPhone(employee.phone);
      setDesignation(employee.designation);
      setCourse(employee.course);
      setGender(employee.gender);
      setImage(employee.image);
    }
  }, [employee]);
  const [updateEmployee] = useUpdateEmployeeMutation();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await updateEmployee({
        id,
        name,
        email,
        phone,
        designation,
        course,
        gender,
        image,
      }).unwrap();
      toast.success(res.message);
      navigate("/employeelist");
    } catch (error: any) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <>
      <div className="flex justify-center my-4">
        <h1 className="text-2xl font-bold">Update Employee</h1>
      </div>
      <div className="flex justify-center h-screen mt-8">
        {isLoading ? (
          <h1 className="text-2xl font-bold">Loading...</h1>
        ) : error ? (
          <h1 className="text-2xl font-bold">Error</h1>
        ) : (
          <form
            className="flex flex-col gap-2 w-1/2 text-xl border border-gray-300 rounded-lg p-4"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="text-sm font-semibold text-md">
              Name
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              placeholder={employee?.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email" className="text-sm font-semibold text-md">
              Email
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              placeholder={employee?.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="phone" className="text-sm font-semibold text-md">
              Phone
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              placeholder={employee?.phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label
              htmlFor="designation"
              className="text-sm font-semibold text-md"
            >
              Designation
            </label>
            <select
              className="border border-gray-300 rounded-md p-2"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option value="">Select Designation</option>
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
            <label htmlFor="course" className="text-sm font-semibold text-md">
              Course
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              placeholder={employee?.course}
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
            <label htmlFor="gender" className="text-sm font-semibold text-md">
              Gender
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              placeholder={employee?.gender}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="salary" className="text-sm font-semibold text-md">
              Salary
            </label>
            <label htmlFor="image" className="text-sm font-semibold text-md">
              Image
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="data"
              placeholder={employee?.image}
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Update
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default UpdateEmployee;
