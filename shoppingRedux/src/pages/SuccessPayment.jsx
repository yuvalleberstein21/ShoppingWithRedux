import React from 'react'
import { useLocation } from 'react-router-dom';

const SuccessPayment = () => {
    const location = useLocation();
    //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
    const data = location.state && location.state.stripeData;


    if (data) {
        console.log(data);
        // Render your component content here using the `data` object
    } else {
        // Handle the case when `stripeData` is not available
        console.error("stripeData is not available");
        // You can choose to render an error message or redirect the user
    }


    return (
        <div>SuccessPayment 🟢</div>
    )
}

export default SuccessPayment