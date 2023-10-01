import { Navigate, Outlet } from "react-router-dom";
import path from "../../utils/path";

const ProtectedRoute = ({ isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to={`${path.HOME}`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
