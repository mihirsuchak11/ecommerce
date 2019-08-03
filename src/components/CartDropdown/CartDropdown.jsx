import React from 'react';

import CustomButton from '../CustomButton/CustomButton';

import './CartDropdown.scss';

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-item" />
            <CustomButton>
                Go To Checkout
            </CustomButton>
        </div>
    )
}

export default CartDropdown;
