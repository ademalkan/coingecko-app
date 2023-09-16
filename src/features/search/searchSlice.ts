import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page_amount: 1,
  per_page_amount: 100,
  search_query: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    pageAmountEdit(state, action) {
      if (action.payload === "prev") state.page_amount += -1;
      if (action.payload === "next") state.page_amount += 1;
    },
    perPageAmountEdit(state, action) {
      state.per_page_amount = action.payload >= 1 ? action.payload : 1;
    },
    searchQueryEdit(state, action) {
      state.search_query = action.payload;
    },
  },
});

export const { pageAmountEdit, perPageAmountEdit, searchQueryEdit } =
  searchSlice.actions;

export default searchSlice.reducer;
