import React, { MouseEventHandler } from "react";

interface DataTableActionsPropsI {
  prevPageHandler: MouseEventHandler<HTMLButtonElement>;
  nextPageHandler: MouseEventHandler<HTMLButtonElement>;
}

const DataTableActions = (props: DataTableActionsPropsI): React.ReactNode => {
  const { prevPageHandler, nextPageHandler } = props;
  return (
    <>
      <div className="flex justify-between items-center p-2">
        <button
          className="cursor-pointer font-medium bg-slate-300 rounded-lg py-1 px-3"
          disabled={false}
          onClick={prevPageHandler}
        >
          Prev Page
        </button>
        <input
          className="bg-slate-300 w-2/5 px-2 py-1 focus:outline-0 rounded-lg"
          placeholder="Search coin"
          type="text"
        />
        <button
          className="cursor-pointer font-medium bg-slate-300 rounded-lg py-1 px-3"
          disabled={false}
          onClick={nextPageHandler}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default DataTableActions;
