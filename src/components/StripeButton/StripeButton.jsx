import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_pF2u3PZ4wa5BvxrkVqyevSLx00XVPbGyDJ';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <>
            <StripeCheckout
                label="Pay Now"
                name="CRWN Clothing Ltd."
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel="Pay Now"
                token={onToken}
                stripeKey={publishableKey}
            />
        </>
    )
}

export default StripeButton;
