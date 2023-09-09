import { CoingeckoI } from "@/utils/interfaces/coingecko-api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coingeckoApiSlice = createApi({
  reducerPath: "coingeckoApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/coins/markets",
    // baseUrl: "https://s",
  }),
  endpoints: (builder) => ({
    getCoins: builder.query<
      CoingeckoI[],
      { page_amount: number; per_page_amount: number; search_query: string }
    >({
      query: (queryParams) =>
        `?vs_currency=usd&order=market_cap_desc&precision=2&page=${
          queryParams.page_amount
        }&per_page=${queryParams.per_page_amount}
        ${queryParams.search_query ? `&ids=${queryParams.search_query}` : ""}`,
    }),

    getCoinsCount: builder.query<CoingeckoI[], {}>({
      query: () => `?vs_currency=usd&order=market_cap_desc`,
    }),
  }),
});

export const { useGetCoinsQuery, useGetCoinsCountQuery } = coingeckoApiSlice;
