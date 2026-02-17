import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Register from "../Pages/Register";
import App from "../App";
import PublicRouter from "./PublicRouter";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile";

export const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<PublicRouter />}>
        <Route path="" element={<Register />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Route>
  ),
);
