import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: number[] = [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<number>) {
      return [...state, action.payload];
    },
    removeFavorite(state, action: PayloadAction<number>) {
      return state.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
