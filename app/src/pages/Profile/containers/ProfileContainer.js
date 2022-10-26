import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ProfileLayout from "../components/ProfileLayout";

import { getOrders } from "../../ShoppingCart/thunks";
import { ROUTE_NAMES } from "../../../router/routeNames";


const ProfileContainer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.auth.userInfo);


  const handleNavigateOrderHistoryDetail = useCallback(
    (id) => {
      navigate(`${ROUTE_NAMES.PROFILE}/${id}`);
    },
    [navigate]
  );


  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  return (
    <ProfileLayout
      userInfo={userInfo}
      onNavigateOrderHistoryDetail={handleNavigateOrderHistoryDetail}
    />
  );
};

export default ProfileContainer;