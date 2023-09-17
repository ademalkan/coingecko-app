import React from "react";
import ActionButton from "../ActionButton";
import SearchBar from "../SearchBar";
import { pageAmountEdit } from "@/features/search/searchSlice";
import { useDispatch } from "react-redux";

const DataTableActions = (): React.ReactNode => {
  const dispatch = useDispatch();

  const nextPageHandler = (): void => {
    dispatch(pageAmountEdit("next"));
  };
  const prevPageHandler = (): void => {
    dispatch(pageAmountEdit("prev"));
  };

  return (
    <>
      <div className="flex justify-between md:flex-row flex-col items-center p-2">
        <ActionButton text="Prev" onClickHandler={prevPageHandler} />
        <SearchBar />
        <ActionButton text="Next" onClickHandler={nextPageHandler} />
      </div>
    </>
  );
};

export default DataTableActions;
