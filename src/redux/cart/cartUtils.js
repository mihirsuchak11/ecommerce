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
