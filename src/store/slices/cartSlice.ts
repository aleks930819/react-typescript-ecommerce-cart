import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../shared/interfaces';

interface InitialState {
    value: number;
    products: Product[]
    isCartOpen: boolean;
}

const initialState: InitialState = {
    value: 0,
    products: [],
    isCartOpen: false
};



export const cartSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {

        addToCart: (InitialState, action: PayloadAction<Product>) => {
            if (InitialState.products.find((product) => product.id === action.payload.id)) return;
            InitialState.products.push(action.payload);
            InitialState.value += 1;
        },

        removeFromCart: (InitialState, action: PayloadAction<number>) => {
            InitialState.products = InitialState.products.filter((product) => product.id !== action.payload);
            InitialState.value -= 1;
        },

        showCart: (InitialState) => {
            InitialState.isCartOpen = !InitialState.isCartOpen;
        },
    }

});

export const { addToCart, showCart,removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;




