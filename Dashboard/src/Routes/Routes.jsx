import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Employee from "../Pages/Employee";
import EmployeeDetails from "../Components/EmployeeDetails";

export const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="" element={<Employee />} ></Route>
        <Route path="employee/:id" element={<EmployeeDetails />} />

    </Route>
  ),
);
