
import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './products.thunks';
import { Product } from '@app/types';

type ProductSliceState = {
    products: Product[];
    isLoading: boolean;
    error: string | null;
};
const initialState: ProductSliceState = {
    products: [],
    isLoading: false,
    error: null,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(getProducts.pending, state => {
            state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        });
        
    },
})


export default productSlice.reducer;