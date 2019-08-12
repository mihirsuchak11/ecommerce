export const addItemToCart = (cartItems, cartItemToAdd) => {
    if (isExistingItem(cartItems, cartItemToAdd)) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

const isExistingItem = (cartItems, cartItemToAdd) => {
    return cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const isExistingItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (isExistingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}