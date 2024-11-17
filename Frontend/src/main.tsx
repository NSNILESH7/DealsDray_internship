import "./index.css";

import App from "./App";
import ReactDOM from "react-dom/client";

import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import Login from "./pages/Login";
import Register from "./pages/Register";
import store from "./redux/store";
import EmployeeList from "./pages/EmployeeList";
import CreateEmployee from "./pages/CreateEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route index={true} path="/" element={<Home />} />
      <Route path="/create" element={<CreateEmployee />} />
      <Route path="employeelist" element={<EmployeeList />} />
      <Route path="update/:id" element={<UpdateEmployee />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
