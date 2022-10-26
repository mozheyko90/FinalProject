import CircularProgress from "@mui/material/CircularProgress";

import styles from "./index.module.scss";

const Spinner = () => {
  return <CircularProgress className={styles.spinner} />;
};

export default Spinner;
