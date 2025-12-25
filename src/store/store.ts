import { configureStore } from '@reduxjs/toolkit';
import CategoryReducer from './slices/categories/category.slice';
import ProductsReducer from './slices/products/product.slice';
// import EventReducer from './slices/events/event.slice';

export const store = configureStore({
  reducer: {
    // events: EventReducer,
    category: CategoryReducer,
    products: ProductsReducer
  },
  // middleware: (getDefaultMidleware)=> getDefaultMidleware({
  //   serializableCheck: false,
  // }),
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch