import { configureStore } from '@reduxjs/toolkit';
import CategoryReducer from './slices/categories/category.slice';
<<<<<<< HEAD
import ProductsReducer from './slices/products/product.slice';
// import EventReducer from './slices/events/event.slice';

export const store = configureStore({
  reducer: {
    // events: EventReducer,
    category: CategoryReducer,
    products: ProductsReducer
=======
import EventReducer from './slices/events/event.slice';

export const store = configureStore({
  reducer: {
    events: EventReducer,
    category: CategoryReducer
>>>>>>> 68a84028a346636778387155a158213838132d31
  },
  middleware: (getDefaultMidleware)=> getDefaultMidleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>
<<<<<<< HEAD

=======
>>>>>>> 68a84028a346636778387155a158213838132d31
export type AppDispatch = typeof store.dispatch