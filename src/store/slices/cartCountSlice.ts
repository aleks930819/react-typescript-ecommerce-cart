import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    value: number;
    products: number[]
}

const initialState: InitialState = {
    value: 0,
    products: []
};


export const cartCountSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {

        addToCart: (InitialState, action: PayloadAction<number>) => {
            if (InitialState.products.includes(action.payload)) return;
            InitialState.products.push(action.payload);
            InitialState.value += 1;
        },
    }

});

export const { addToCart } = cartCountSlice.actions;

export default cartCountSlice.reducer;




