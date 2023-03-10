import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
    value: number;
}

const initialState: InitialState = {
    value: 0,
};


export const cartCountSlice = createSlice({
    name: 'counter',
    initialState,

    reducers: {
        
        increment: (InitialState,) => {
            InitialState.value += 1;
        },
    }

});

export const { increment } = cartCountSlice.actions;

export default cartCountSlice.reducer;




