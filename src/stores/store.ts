import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from './favoritesSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  if (typeof window !== 'undefined') {
    const state = store.getState();
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
  }
});