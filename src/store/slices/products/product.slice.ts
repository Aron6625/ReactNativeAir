import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Product} from "@app/types/product.type";
import { Products } from "@app/assets/data/products";
type EventsSliceState = {
    products: Product[]
};
const initialState: EventsSliceState = {
    products: Products,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<Product>){
            state.products.push(action.payload)
        },
    }
})

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;