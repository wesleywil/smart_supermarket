import { configureStore } from "@reduxjs/toolkit";

import managementReducer from "./management/management";
import clientReducer from "./client/client";

export const store = configureStore({
  reducer: {
    management: managementReducer,
    switch_view: clientReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
