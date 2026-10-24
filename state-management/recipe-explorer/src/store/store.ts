import { configureStore } from "@reduxjs/toolkit";
import reducer from "@/store/favoriteSlice";

const store = configureStore({
  reducer: {
    favorites: reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
