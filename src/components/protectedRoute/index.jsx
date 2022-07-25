import { Navigate, Outlet } from "react-router-dom";
import {  useUserContext } from "../../context/user/UserContext";

export const ProtectedRoute = () => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
