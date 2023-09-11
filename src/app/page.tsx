"use client";
import {
  ApiFetchError,
  DataTable,
  DataTableActions,
  DataTableLoader,
} from "@/components";
import { useGetCoinsQuery } from "@/features/api/coingeckoApiSlice";
import CoinsMockHelper from "@/utils/helpers/CoinsMockHelper";
import { CoingeckoI } from "@/utils/interfaces/coingecko-api";
import React, { useEffect, useState } from "react";
interface pageOptionsStateI {
  page_amount: number;
  per_page_amount: number;
  search_query: string;
}

export default function Home(): React.ReactNode {
  const coinsMockHelper = new CoinsMockHelper();

  const [pageOptions, setPageOptions] = useState<pageOptionsStateI>({
    page_amount: 1,
    per_page_amount: 100,
    search_query: "",
  });
  const [mockCoins, setMockCoins] = useState<CoingeckoI[]>([]);

  const {
    data: coins,
    isLoading,
    isSuccess,
    isError,
  } = useGetCoinsQuery({
    page_amount: pageOptions.page_amount,
    per_page_amount: pageOptions.per_page_amount,
    search_query: pageOptions.search_query,
  });

  isSuccess ?? coinsMockHelper.setCoins(coins);

  useEffect(() => {
    if (isError && !mockCoins.length) {
      const getCoinsResult = coinsMockHelper.getCoins();
      getCoinsResult ?? setMockCoins(getCoinsResult);
    }
  }, [isError]);

  const nextPageHandler = (): void => {
    setPageOptions({
      ...pageOptions,
      page_amount: (pageOptions.page_amount += 1),
    });
  };
  const prevPageHandler = (): void => {
    if (pageOptions.page_amount > 1) {
      setPageOptions({
        ...pageOptions,
        page_amount: (pageOptions.page_amount -= 1),
      });
    }
  };

  const searchHandler = (searchText: string): void => {
    setPageOptions({
      ...pageOptions,
      search_query: (pageOptions.search_query = searchText),
    });
  };

  return (
    <article>
      {isLoading ?? <DataTableLoader />}

      {!isError ?? (
        <DataTableActions
          nextPageHandler={nextPageHandler}
          prevPageHandler={prevPageHandler}
          searchHandler={searchHandler}
        />
      )}

      {isError ?? (
        <>
          <>
            <div className="bg-slate-100 shadow-md my-3 mx-1 p-3 rounded-md text-center">
              Coingecko rate limit is full. You now see old data. If you want to
              see the most current data, try again in 15-20 minutes.
            </div>
            <DataTable coins={mockCoins} />
          </>
        </>
      )}

      {isSuccess && (
        <>
          {(!isLoading && coins.length > 0) ?? (
            <>
              <DataTable coins={coins} />
            </>
          )}
        </>
      )}

      {(isError && !mockCoins.length) ?? <ApiFetchError />}
    </article>
  );
}
