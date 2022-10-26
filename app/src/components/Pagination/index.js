import MaterialPagination from "@mui/material/Pagination";

import styles from "./index.module.scss";


const Pagination = ({ currentPage, handlePageChange }) => {
  return (
    <div className={styles.wrapper}>
    <MaterialPagination 
      boundaryCount={1}
      count={25}
      color="primary"
      page={currentPage}
      onChange={handlePageChange}
    />
    </div>
  );
};

export default Pagination;
