import { configureStore } from "@reduxjs/toolkit";

import managementReducer from "./management/management";
import clientReducer from "./client/client";
import productReducer from "./management/products/products";
import printReducer from "./management/print/print";

export const store = configureStore({
  reducer: {
    management: managementReducer,
    client: clientReducer,
    products: productReducer,
    print: printReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
