import { configureStore } from "@reduxjs/toolkit";

import managementReducer from "./management/management";
import switchViewReducer from "./client/switch_view/switch_view";

export const store = configureStore({
  reducer: {
    management: managementReducer,
    switch_view: switchViewReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
