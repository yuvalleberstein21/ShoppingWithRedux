import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';


const KEY = 'pk_test_51Nh66tLzupgPvagxiO5PKZQ8JKiO9lHWF2hHXrS712iRwY5cJcG1sx1biABBVBHbm0CiANxYeycOZJGBg68XoTn800cAuxAgdm'

const PayNow = () => {

    const [stripeToken, setStripedToken] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripedToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:8000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000
                })
                console.log(res.data)
                navigate('/success-payment')
            } catch (error) {
                console.log(error);
            }
        }

        stripeToken && makeRequest();
    }, [stripeToken, navigate])

    return (
        <div>
            {stripeToken ? (<span>Processing. Please wait...</span>) : (
                <StripeCheckout
                    name='Leber Shop'
                    image='https://static.vecteezy.com/system/resources/thumbnails/011/401/535/small/online-shopping-trolley-click-and-collect-order-logo-design-template-vector.jpg'
                    billingAddress
                    shippingAddress
                    description='Your total is $20'
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button>PAY WITH STRIPE</button>
                </StripeCheckout>
            )}

        </div>
    )
}

export default PayNow