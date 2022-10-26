import Footer from "../Footer";
import Header from "../Header";

import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
