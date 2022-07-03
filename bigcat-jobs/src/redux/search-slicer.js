import { createSlice } from "@reduxjs/toolkit";

const initialState = { keyword: "", location: "" };

const counterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.keyword = action.payload;
      state.location = action.payload;
    },
  },
});

export const { setSearch } = counterSlice.actions;
export default counterSlice.reducer;
