import startCase from "lodash/startCase";


import { useCart } from "../../../../hooks/useCart";
import Spinner from "../../../../components/Spinner";
import CountButton from "../../components/CountButton";


import styles from "./index.module.scss";

import hp from "../../../../static/icons/hp.png";
import attack from "../../../../static/icons/attack.png";
import defense from "../../../../static/icons/defense.png"; 
import special_attack from "../../../../static/icons/special_attack.png";
import special_defense from "../../../../static/icons/special_defense.png";
import speed from "../../../../static/icons/speed.png";
import Delete from "@mui/icons-material/Delete";


const icon = [hp, attack, defense, special_attack, special_defense, speed];

const ProductLayout = ({ product, isLoading, error }) => {
  const {
    cart,
    handleAddItem,
    handleDeleteItem,
    handleIncrementItem,
    handleDecrementItem,
  } = useCart();
  
  const statsIcons = product.stats?.map((stat, index) => {
    return { ...stat, icon: icon[index] };
  });
  
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={product.image} alt={product.name} />
          </div>

          <div className={styles.about}>
            <div className={styles.name}>{startCase(product.name)}</div>

            <div className={styles.statsWrapper}>
              <div className={styles.title}>Stats:</div>
              {statsIcons?.map((stat) => (
                <div key={stat.title} className={styles.stats}>
                  <p className={styles.stat}><img height={25} src={stat.icon} alt="icon" />{stat.title}</p>
                  <p className={styles.stat}> - {stat.value}</p>
                </div>
              ))}
            </div>

            <div className={styles.price}>Price: $ {product.price}</div>

            {cart.itemsList[product.id]?.quantity ? (
              <div className={styles.changeButton}>
<CountButton
id={product.id}
quantity={cart.itemsList[product.id]?.quantity}
onDecrementItem={handleDecrementItem}
onIncrementItem={handleIncrementItem}
/>

<Delete
sx={{ cursor: "pointer", fontSize: 40, color: "#1B1B4D"}}
onClick={() => handleDeleteItem(product.id)}
/>
              </div>
            ) : (
            <button 
            onClick={() => 
            handleAddItem({
              id: product.id,
              name: product.name,
              image: product.image,
              price: product.price,
              quantity: 1,
            })
            }
            className={styles.button}>Add to cart</button>
            )}
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
        </div>
      )}
    </>
  );
};

export default ProductLayout;
