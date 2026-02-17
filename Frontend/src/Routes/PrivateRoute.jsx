import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import Loading from "../Components/Loading";

function PrivateRoute() {
  const { profileData, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }
  if (!profileData) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export default PrivateRoute;