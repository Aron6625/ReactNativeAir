import { configureStore } from '@reduxjs/toolkit';
import CategoryReducer from './slices/categories/category.slice';
// import EventReducer from './slices/events/event.slice';

export const Store = configureStore({
  reducer: {
    // events: EventReducer,
    category: CategoryReducer
  },
  // middleware: (getDefaultMidleware)=> getDefaultMidleware({
  //   serializableCheck: false,
  // }),
});

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch