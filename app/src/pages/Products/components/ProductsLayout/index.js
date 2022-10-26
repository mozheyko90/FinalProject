import Spinner from "../../../../components/Spinner";
import ProductCard from "../ProductCard";
import Pagination from "../../../../components/Pagination";

import styles from "./index.module.scss";

const ProductsLayout = ({
  products,
  isLoading,
  error,
  handleNavigateToPokemonDetail,
  page,
  handlePageChange,
}) => {
  
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Our Products</h2>

      <div className={styles.productsWrapper}>
        {isLoading ? (
          <Spinner />
        ) : (
          products.map(({ id, name, image, price, quanlity }) => (
            <ProductCard
              key={id}
              id={id}
              name={name}
              image={image}
              price={price}
              quanlity={quanlity}
              handleClick={() => handleNavigateToPokemonDetail(id)}
            />
          ))
        )}
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
      <div>
        <Pagination currentPage={page} handlePageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default ProductsLayout;