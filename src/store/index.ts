
import { configureStore } from '@reduxjs/toolkit';
import productsApi from './apis/productsApi';
import cartCountReducer from './slices/cartCountSlice';

export const store = configureStore({
    reducer: {
        cartCount: cartCountReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const selectCartCount = (state: RootState) => state.cartCount.value;

export { useGetProductsQuery } from './apis/productsApi';