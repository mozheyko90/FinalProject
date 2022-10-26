import { useCallback } from "react";
import {useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, getCartInfo, updateItem } from "../pages/ShoppingCart/thunks";


export const useCart = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const handleGetCartInfo = useCallback(() => {
        dispatch(getCartInfo());
    }, [dispatch]);

    const handleAddItem = useCallback(
       (itemToAdd) => {
        dispatch(addItem(itemToAdd));
       },
       [dispatch]
       );

const handleDeleteItem = useCallback(
    (id) => {
        dispatch(deleteItem(id));
    },
    [dispatch]
);

const handleIncrementItem = useCallback(
    (payload) => {
        const reqestBody = {
            id: payload.id,
            quantity: payload.quantity + 1,
        };
        dispatch(updateItem(reqestBody));
    }, 
    [dispatch]
);

const handleDecrementItem = useCallback(
    ({ id, quantity }) => {
        if (quantity > 1) {
            const payload = {
                id, 
                quantity: quantity - 1,
            };

            dispatch(updateItem(payload));
        }
    },
    [dispatch]
);

return {
    cart,
    handleGetCartInfo,
    handleAddItem,
    handleDeleteItem,
    handleIncrementItem,
    handleDecrementItem,
};

};