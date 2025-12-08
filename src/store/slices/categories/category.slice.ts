import { ICategory } from "../../../types/category.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EventsSliceState = {
    category: ICategory[]
    selectedCategory: ICategory | undefined
};

const initialState: EventsSliceState = {
    category: [],
    selectedCategory: undefined
}

export const categorySlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setCategories(state, action: PayloadAction<ICategory[]>) {
            state.category = action.payload;
        },
        setSelectedCategory(state, action: PayloadAction<ICategory>){
            state.selectedCategory = action.payload;
        },
        addCategory(state, action: PayloadAction<ICategory>){
            state.category = [... state.category, action.payload]
        },
    }
});

export const categoryActions = categorySlice.actions;

// export const CategoryReducer = categorySlice.reducer;
export default categorySlice.reducer;
