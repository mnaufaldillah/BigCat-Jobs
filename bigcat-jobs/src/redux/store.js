import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search-slicer";

export default configureStore({
  reducer: {
    search: searchReducer,
  },
});
