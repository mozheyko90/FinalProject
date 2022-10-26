import Delete from "@mui/icons-material/Delete";
import CountButton from "../CountButton";

import styles from "./index.module.scss";

const ShoppingCartLayout = ({
    cart,
    onDeleteItem,
    onIncrementItem,
    onDecrementItem,
    onCreateOrder, 
    order,
  }) => {
    return (
      <div className={styles.wrapper}>
        <div className={styles.cartWrapper}>
          <div className={styles.cart}>
            <h2 className={styles.title}>My Cart</h2>
  
            {!cart.quantity ? (
            <p className={styles.titleCart}>
              Your shopping cart is empty.
            </p>
          ) : (
            Object.entries(cart?.itemsList).map(([id, item]) => (
              <div key={item.id} className={styles.cardWrapper}>
                <div className={styles.card}>
                  <img height={100} src={item.image} alt="pokemon" />

                  <div className={styles.info}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.price}>Price: $ {item.price}</div>
                  </div>
                </div>
  
                <div className={styles.buttonsWrapper}>
                  <Delete
                    sx={{ cursor: "pointer", fontSize: 40, color: "#1B1B4D" }}
                    onClick={() => onDeleteItem(id)}
                  />
  
                  <CountButton
                    onDecrementItem={onDecrementItem}
                    quantity={item.quantity}
                    onIncrementItem={onIncrementItem}
                    id={item.id}
                  />
                </div>
              </div>
            ))
          )}
          </div>

  
          <div className={styles.orderWripper}>
            <h2 className={styles.orderPrice}>Order Summary</h2>
            <div className={styles.subOrder}>
              <div>Item Subtotal</div>
              <div>$ {cart?.totalPrice}</div>
            </div>
            <div className={styles.total}>
              <div>Order Total</div>
              <div>$ {cart?.totalPrice}</div>
            </div>
            <button onClick={onCreateOrder} className={styles.checkout}>
            Checkout
          </button>
          </div>
        </div>


      </div>
    );
  };
  
  export default ShoppingCartLayout;