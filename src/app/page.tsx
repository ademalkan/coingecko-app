"use client";
import {
  ApiFetchError,
  DataTable,
  DataTableActions,
  DataTableLoader,
  NotFoundCoin,
} from "@/components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CoingeckoI, CoinsMockHelper } from "@/utils";
import { SearchSliceI, useGetCoinsQuery } from "@/features";

export default function Home(): React.ReactNode {
  const coinsMockHelper = new CoinsMockHelper();

  const searchSlice = useSelector((state: SearchSliceI) => state?.searchSlice);

  const [mockCoins, setMockCoins] = useState<CoingeckoI[]>([]);

  const {
    data: coins,
    isLoading,
    isSuccess,
    isError,
  } = useGetCoinsQuery(searchSlice);

  if (isSuccess) coinsMockHelper.setCoins(coins);

  useEffect(() => {
    if (isError && !mockCoins.length) {
      const getCoinsResult = coinsMockHelper.getCoins();
      if (getCoinsResult) setMockCoins(getCoinsResult);
    }
  }, [isError]);

  return (
    <article>
      {isLoading && !isError && <DataTableLoader />}

      {isError && mockCoins.length > 0 && (
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

      {isSuccess && !isError && (
        <>
          <DataTableActions />
          {coins.length > 0 ? <DataTable coins={coins} /> : <NotFoundCoin />}
        </>
      )}

      {isError && mockCoins.length == 0 && <ApiFetchError />}
    </article>
  );
}
