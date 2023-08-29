"use client";
import { useGetCoinsQuery } from "@/features/api/coingeckoApiSlice";
import React, { useState } from "react";
import DataTable from "@/components/DataTable";
import DataTableLoader from "@/components/DataTableLoader";
import ApiFetchError from "@/components/ApiFetchError";
import DataTableActions from "@/components/DataTableActions";

interface pageOptionsStateI {
  page_amount: number;
  per_page_amount: number;
}

export default function Home(): React.ReactNode {
  const [pageOptions, setPageOptions] = useState<pageOptionsStateI>({
    page_amount: 1,
    per_page_amount: 10,
  });

  const {
    data: coins,
    isLoading,
    isSuccess,
    isError,
  } = useGetCoinsQuery({
    page_amount: pageOptions.page_amount,
    per_page_amount: pageOptions.per_page_amount,
  });

  const nextPageHandler = () => {
    setPageOptions({
      ...pageOptions,
      page_amount: (pageOptions.page_amount += 1),
    });
  };
  const prevPageHandler = () => {
    setPageOptions({
      ...pageOptions,
      page_amount: (pageOptions.page_amount -= 1),
    });
  };

  return (
    <article>
      {isLoading && <DataTableLoader />}
      {isError && <ApiFetchError />}
      {isSuccess && (
        <>
          {!isLoading && coins.length > 0 && (
            <>
              <DataTableActions
                nextPageHandler={nextPageHandler}
                prevPageHandler={prevPageHandler}
              />
              <DataTable coins={coins} />
            </>
          )}
        </>
      )}
    </article>
  );
}
