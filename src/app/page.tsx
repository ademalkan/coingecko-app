"use client";
import {
  ApiFetchError,
  DataTable,
  DataTableActions,
  DataTableLoader,
  TinyLineChart,
} from "@/components";
import { useGetCoinsQuery } from "@/features/api/coingeckoApiSlice";
import React, { useState } from "react";

interface pageOptionsStateI {
  page_amount: number;
  per_page_amount: number;
  search_query: string;
}

export default function Home(): React.ReactNode {
  const [pageOptions, setPageOptions] = useState<pageOptionsStateI>({
    page_amount: 1,
    per_page_amount: 100,
    search_query: "",
  });

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

  const nextPageHandler = (): void => {
    setPageOptions({
      ...pageOptions,
      page_amount: (pageOptions.page_amount += 1),
    });
  };
  const prevPageHandler = (): void => {
    pageOptions.page_amount > 1 &&
      setPageOptions({
        ...pageOptions,
        page_amount: (pageOptions.page_amount -= 1),
      });
  };

  const searchHandler = (searchText: string): void => {
    setPageOptions({
      ...pageOptions,
      search_query: (pageOptions.search_query = searchText),
    });
  };

  return (
    <article>
      {!isError && (
        <DataTableActions
          nextPageHandler={nextPageHandler}
          prevPageHandler={prevPageHandler}
          searchHandler={searchHandler}
        />
      )}

      {isLoading && <DataTableLoader />}
      {isError && <ApiFetchError />}
      {isSuccess && (
        <>
          {!isLoading && coins.length > 0 && (
            <>
              <DataTable coins={coins} />
            </>
          )}
        </>
      )}
    </article>
  );
}
