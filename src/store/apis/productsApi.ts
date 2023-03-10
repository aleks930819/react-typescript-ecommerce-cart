import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Product } from '../../shared/interfaces'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3005' }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void >({
            query: () => '/products',
        }),
    }),
})



export const { useGetProductsQuery } = productsApi
export default productsApi
