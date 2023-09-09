import React, { MouseEventHandler } from "react";
import HoverAnimation from "../HoverAnimation";
import ActionButton from "../ActionButton";

interface DataTableActionsPropsI {
  prevPageHandler: MouseEventHandler<HTMLButtonElement>;
  nextPageHandler: MouseEventHandler<HTMLButtonElement>;
  searchHandler: (searchText: string) => void;
}

const DataTableActions = (props: DataTableActionsPropsI): React.ReactNode => {
  const { prevPageHandler, nextPageHandler, searchHandler } = props;

  return (
    <>
      <div className="flex justify-between items-center p-2">
        <ActionButton text="Prev" onClickHandler={prevPageHandler} />
        <HoverAnimation className="w-2/5" tapScale={1.1}>
          <input
            className="bg-slate-300 w-full px-2 py-1 focus:outline-0 rounded-lg"
            placeholder="Search coin"
            type="text"
            onChange={(event) => searchHandler(event.currentTarget.value)}
          />
        </HoverAnimation>
        <ActionButton text="Next" onClickHandler={nextPageHandler} />
      </div>
    </>
  );
};

export default DataTableActions;
