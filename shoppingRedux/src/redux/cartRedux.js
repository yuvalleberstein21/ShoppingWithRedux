import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },

    reducers: {
        addProduct: (state, action) => {

            const existingProduct = state.products.find(product => product._id === action.payload._id);


            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {

                state.products.push(action.payload);
            }

            state.total += action.payload.price * action.payload.quantity;

            state.quantity += action.payload.quantity;
        },
        // removeProducts: (state, action) => {
        //     state.products = [];
        //     state.total = 0;
        //     state.quantity = 0;
        // },

        clearProduct: (state, action) => {
            const productIdToRemove = action.payload;

            // Create a new array of products without the product to be removed
            const updatedProducts = state.products.filter(
                (product) => product._id !== productIdToRemove
            );

            // Calculate the total and quantity based on the updated products
            const updatedTotal = updatedProducts.reduce(
                (total, product) => total + product.price * product.quantity,
                0
            );
            const updatedQuantity = updatedProducts.reduce(
                (quantity, product) => quantity + product.quantity,
                0
            );

            // Update the state with the new values
            state.products = updatedProducts;
            state.total = updatedTotal;
            state.quantity = updatedQuantity;

        },

    },
});

export const { addProduct, clearProduct } = cartSlice.actions
export default cartSlice.reducer;