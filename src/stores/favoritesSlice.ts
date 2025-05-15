import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadInitialState = (): string[] => {
  if (typeof window != undefined) {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  }
  return [];
};

const initialState: string[] = loadInitialState();

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload)
      };
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      return state.filter(name => name !== action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const index = state.indexOf(action.payload);
      if (index >=0) {
        return state.filter(name => name !== action.payload);
      } else {
        state.push(action.payload);
      }
    }
  }
})

export const { addFavorite, removeFavorite, toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;