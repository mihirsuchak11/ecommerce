import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelector';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripButton from '../../components/StripeButton/StripeButton';

import './checkout.scss';

const Checkout = ({ cartItems, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )}
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
                *Please use the following credit card for payment* <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
            <StripButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
