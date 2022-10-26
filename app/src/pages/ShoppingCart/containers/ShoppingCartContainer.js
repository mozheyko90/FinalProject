import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useCart} from "../../../hooks/useCart";
import ShoppingCartLayout from "../components/ShoppingCartLayout";
import { createNewOrder } from "../thunks";


const ShoppingCartContainer = () => {

    const dispatch = useDispatch();

  const order = useSelector((state) => state.order);

  const { cart, handleDeleteItem, handleIncrementItem, handleDecrementItem } =
    useCart();

  const handleCreateOrder = useCallback(() => {
    const { quntity, error, isLoading, ...otherCartFields } = cart;

    const { customerId, totalPrice, itemsList } = otherCartFields;

    const customItemsList = Array.from(Object.values(itemsList));

    dispatch(
      createNewOrder({ customerId, totalPrice, itemsList: customItemsList })
    );
  }, [cart, dispatch]);

return (
    <ShoppingCartLayout
    cart={cart}
    onDeleteItem={handleDeleteItem}
    onIncrementItem={handleIncrementItem}
    onDecrementItem={handleDecrementItem}
    order={order}
    onCreateOrder={handleCreateOrder}
    />
)
};

export default ShoppingCartContainer;
