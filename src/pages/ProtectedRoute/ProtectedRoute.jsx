import { Navigate, Outlet } from "react-router-dom";
import path from "../../utils/path";

const ProtectedRoute = ({ isAllowed }) => {
  console.log(isAllowed);
  if (!isAllowed) {
    return <Navigate to={`${path.HOME}`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
