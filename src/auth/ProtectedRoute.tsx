import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const ProtectedRoute = ({ children }:any) => {
  const { user }:any = useAuth();
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
