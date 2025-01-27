import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCart],
    cart => cart.cartItems.reduce((accumulatedQuantity, carItem) => accumulatedQuantity + carItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCart],
    cart => cart.cartItems.reduce((accumulatedQuantity, carItem) => accumulatedQuantity + carItem.quantity * carItem.price, 0)
)