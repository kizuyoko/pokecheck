import { createSlice, PayloadAction } from "@reduxjs/toolkit";

function loadInitialState() {
  if (typeof window === 'undefined') return [];
  try {
    const item = localStorage.getItem('favorites');
    return item ? JSON.parse(item) : [];
  } catch {
    return [];
  }
}

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
      if (!action.payload || action.payload.toLowerCase() === 'unknown') {
        return state;
      }
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