import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../router/routeNames";

import styles from "./index.module.scss";

import Pokemon from "../../static/images/Pokemon.png";
import Profile from "../../static/icons/Profile.png";
import ShopBadge from "../ShopBadge";
import IconProfile from "../IconProfile";

import { useSelector } from "react-redux";



const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <div className={styles.header}>
      <div className={styles.header_left}>
        <Link className={styles.link} to={ROUTE_NAMES.PRODUCTS}>
          <img className={styles.logo} src={Pokemon} alt="logo" />
        </Link>
        <Link className={styles.linkTitle} to={ROUTE_NAMES.HOME}>
        <h1 className={styles.title}>PokemonShop</h1>
        </Link>
      </div>

      <div className={styles.shoppingCart}>
        {isAuth ? (
          <div className={styles.profile}>
            <IconProfile />
          </div>
        ) : (
          <Link className={styles.signIn} to={ROUTE_NAMES.SIGN_IN}>
            <img className={styles.profile} src={Profile} alt="profile" />
            SIGN IN / SIGN UP
          </Link>
        )}

        <Link className={styles.link} to={ROUTE_NAMES.SHOPPING_CART}>
        <ShopBadge />
        </Link>
      </div>
</div>
  );
};
export default Header;
