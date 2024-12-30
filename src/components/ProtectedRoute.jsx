import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// eslint-disable-next-line
const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  console.log(user);

  if (!user.isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default ProtectedRoute;
