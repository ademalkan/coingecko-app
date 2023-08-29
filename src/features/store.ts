import { configureStore } from "@reduxjs/toolkit";
import { coingeckoApiSlice } from "./api/coingeckoApiSlice";

export const store = configureStore({
  reducer: {
    [coingeckoApiSlice.reducerPath]: coingeckoApiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(coingeckoApiSlice.middleware)
})