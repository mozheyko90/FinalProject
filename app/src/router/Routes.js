import { Routes, Route } from "react-router-dom";

import { ROUTE_NAMES } from "./routeNames";
import PrivateRoutes from "./PrivateRoutes";

import HomeContainer from "../pages/Home/containers/HomeContainer";
import SignInContainer from "../pages/SignIn/containers/SignInContainer";
import SignUpContainer from "../pages/SignUp/containers/SignUpContainer";
import ProductsContainer from "../pages/Products/containers/ProductsContainer";
import ProductContainer from "../pages/ProductDetails/containers/ProductContainer";
import ShoppingCartContainer from "../pages/ShoppingCart/containers/ShoppingCartContainer";
import ProfileContainer from "../pages/Profile/containers/ProfileContainer";


const Router = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path={ROUTE_NAMES.PRODUCTS} element={<ProductsContainer />} />
      <Route path={ROUTE_NAMES.PRODUCT} element={<ProductContainer/>} />
      <Route path={ROUTE_NAMES.PROFILE} element={<ProfileContainer />} />
      <Route path={ROUTE_NAMES.SHOPPING_CART} element={<ShoppingCartContainer />} />
      </Route>
      <Route path={ROUTE_NAMES.HOME} element={<HomeContainer />} />
      <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
      <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
    </Routes>
  );
};
export default Router;
