import React, { useRef } from "react";
import HoverAnimation from "../HoverAnimation";
import ActionButton from "../ActionButton";
import { useDispatch, useSelector } from "react-redux";
import { SearchSliceI, searchQueryEdit } from "@/features";
import { lowerCaseFormatter } from "@/utils";

const SearchBar = (): React.ReactNode => {
  const dispatch = useDispatch();

  const searchSlice = useSelector((state: SearchSliceI) => state?.searchSlice);

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const searchHandler = (searchText: string): void => {
    dispatch(searchQueryEdit(searchText));
  };

  return (
    <>
      <HoverAnimation className="md:w-2/5 my-3 md:my-0 flex " tapScale={1.1}>
        <input
          className="bg-slate-200 w-full px-2 py-1 focus:outline-0 rounded-lg rounded-r-none"
          placeholder={"Search Coin on Full Name"}
          defaultValue={searchSlice.search_query}
          type="text"
          ref={searchInputRef}
        />
        <ActionButton
          className="rounded-l-none bg-slate-300"
          isHoverAnimationReset={true}
          text={"Search"}
          onClickHandler={() =>
            searchHandler(
              lowerCaseFormatter(searchInputRef.current?.value) || ""
            )
          }
        />
        {searchSlice.search_query && (
          <ActionButton
            className="ml-1 bg-slate-300"
            isHoverAnimationReset={true}
            text={"Reset"}
            onClickHandler={() => searchHandler("")}
          />
        )}
      </HoverAnimation>
    </>
  );
};

export default SearchBar;
