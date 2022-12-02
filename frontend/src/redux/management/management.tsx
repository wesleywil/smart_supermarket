import { createSlice } from "@reduxjs/toolkit";

export interface ManagementState {
  switch: boolean;
}

const initialState: ManagementState = {
  switch: false,
};

export const managementSlice = createSlice({
  name: "management",
  initialState,
  reducers: {
    switch_print: (state) => {
      state.switch = true;
    },
    switch_products: (state) => {
      state.switch = false;
    },
  },
});

export const { switch_print, switch_products } = managementSlice.actions;

export default managementSlice.reducer;
