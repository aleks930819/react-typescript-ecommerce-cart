import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    value: number;
    products: number[]
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

        addToCart: (InitialState, action: PayloadAction<number>) => {
            if (InitialState.products.includes(action.payload)) return;
            InitialState.products.push(action.payload);
            InitialState.value += 1;
        },

        showCart: (InitialState) => {
            InitialState.isCartOpen = !InitialState.isCartOpen;
        },
    }

});

export const { addToCart, showCart } = cartSlice.actions;

export default cartSlice.reducer;



