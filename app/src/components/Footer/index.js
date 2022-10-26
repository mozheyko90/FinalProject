import styles from "./index.module.scss";
import facebook from "../../static/icons/Facebook.png";
import instagram from "../../static/icons/Instagram.png";
import twitter from "../../static/icons/Twitter.png";

const Footer = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.social}>
          <a href="https://www.facebook.com/">
            <img className={styles.link} src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com/">
            <img className={styles.link} src={instagram} alt="instagram" />
          </a>
          <a href="https://twitter.com/">
            <img className={styles.link} src={twitter} alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
