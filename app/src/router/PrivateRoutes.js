import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";

const PrivateRoutes = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return isAuth ? <Outlet /> : <Navigate to={ROUTE_NAMES.SIGN_IN} />;
};

export default PrivateRoutes;
