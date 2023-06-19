import { configureStore } from "@reduxjs/toolkit";
import mazeReducer from "./mazeReducer";

export default configureStore({
  reducer: {
    maze: mazeReducer,
  },
});
