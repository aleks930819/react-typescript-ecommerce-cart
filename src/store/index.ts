
import { configureStore } from '@reduxjs/toolkit';
import productsApi from './apis/productsApi';
import cartReducer from './slices/cartSlice';

export const store  = configureStore({
    reducer: {
        cartCount: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const selectCartCount = (state: RootState) => state.cartCount.value;
export const isCartOpen = (state: RootState) => state.cartCount.isCartOpen;
export const seletCartProducts = (state: RootState) => state.cartCount.products;
export const selectTotalCartPrice = (state: RootState) => state.cartCount.totalCartprice;

export { useGetProductsQuery } from './apis/productsApi';