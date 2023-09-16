import { configureStore } from "@reduxjs/toolkit";
import { coingeckoApiSlice } from "./api/coingeckoApiSlice";
import searchSlice from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    [coingeckoApiSlice.reducerPath]: coingeckoApiSlice.reducer,
    searchSlice: searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coingeckoApiSlice.middleware),
});
