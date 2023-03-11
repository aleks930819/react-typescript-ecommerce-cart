import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../shared/interfaces';

import { toast } from 'react-toastify';

interface InitialState {
    value: number;
    products: Product[]
    isCartOpen: boolean;
    totalCartprice: number;
}

const initialState: InitialState = {
    value: 0,
    products: [],
    isCartOpen: false,
    totalCartprice: 0
};



export const cartSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {

        addToCart: (InitialState, action: PayloadAction<Product>) => {
            if (InitialState.products.find((product) => product.id === action.payload.id)) return;

            action.payload.qty = 1;


            InitialState.products = [...InitialState.products, action.payload,];

            InitialState.value += 1;
            InitialState.totalCartprice = InitialState.products.reduce((acc, product) => acc + product.price, 0);
            toast.success('Product added to cart');
        },

        removeFromCart: (InitialState, action: PayloadAction<number>) => {
            InitialState.products = InitialState.products.filter((product) => product.id !== action.payload);
            InitialState.value -= 1;
            InitialState.totalCartprice = InitialState.products.reduce((acc, product) => acc + product.price, 0);
            toast.success('Product removed from cart');
        },

        showCart: (InitialState) => {
            InitialState.isCartOpen = !InitialState.isCartOpen;
        },

        increaseQty: (InitialState, action: PayloadAction<number>) => {
            const product = InitialState.products.find((product) => product.id === action.payload);
            if (product) {
                product.qty = product.qty ? product.qty + 1 : 1;
                InitialState.totalCartprice = InitialState.totalCartprice + product.price;
            }
        },

        decreaseQty: (InitialState, action: PayloadAction<number>) => {
            const product = InitialState.products.find((product) => product.id === action.payload);
            if (product && product.qty) {
                product.qty = product.qty - 1;

                if (product.qty === 0) {
                    InitialState.products = InitialState.products.filter((product) => product.id !== action.payload);
                    InitialState.value -= 1;
                    InitialState.totalCartprice = InitialState.products.reduce((acc, product) => acc + product.price, 0);
                    toast.success('Product removed from cart');
                    return;
                }
                InitialState.totalCartprice = InitialState.totalCartprice - product.price;

            }



        },


    }

});

export const { addToCart, showCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;

export default cartSlice.reducer;




