import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container">
        <h1 className="text-3xl font-bold text-center mb-8">
          Employee Management System
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="bg-white p-4 rounded-lg shadow-md flex  flex-col justify-center ">
          <h2 className="text-2xl font-bold mb-4">Create Employees</h2>
          <p className="mb-4">Add a new employee to the system.</p>
          <Link to="/create" className="btn btn-primary">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Create Employee
            </button>
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">List of Employees</h2>
          <p className="mb-4">View and manage existing employees.</p>
          <Link to="/employeelist" className="btn btn-primary">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              View Employees
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
