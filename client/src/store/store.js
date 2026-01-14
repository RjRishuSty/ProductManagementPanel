import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./slices/modeSlice";
import sidebarReducer from "./slices/sidebarSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    mode: modeReducer,
    sidebar: sidebarReducer,
    product: productReducer,
  },
});

export default store;
