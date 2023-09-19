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
        incrementQuantity: (state, action) => {
            const { productId } = action.payload;
            const product = state.products.find((p) => p._id === productId);
            if (product) {
                product.quantity += 1;
                state.total += product.price;
                state.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const { productId } = action.payload;
            const product = state.products.find((p) => p._id === productId);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
                state.total -= product.price;
                state.quantity -= 1;
            }
        },

    },
});

export const { addProduct, clearProduct, incrementQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer;