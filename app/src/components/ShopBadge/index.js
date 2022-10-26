import { memo, useEffect } from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Trolley from "../../static/icons/ShoppingTrolley.png";
import { useSelector } from "react-redux";

import { useCart } from "../../hooks/useCart";

import styles from "./index.module.scss";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    color: "#000",
    background: "#fed61b",
    top: 5,
    right: 5,
  },
}));

const ShopBadge = () => {
  const { cart, handleGetCartInfo } = useCart();

  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      handleGetCartInfo();
    }
  }, [isAuth, handleGetCartInfo]);

  return (
    <StyledBadge badgeContent={cart.quantity === 0 ? null : cart.quantity}>
     <img className={styles.trolley} src={Trolley} alt="ShoppingTrolley" />
    </StyledBadge>
  );
};

export default memo(ShopBadge);