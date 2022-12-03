import { createSlice } from "@reduxjs/toolkit";

export interface ManagementState {
  switch: boolean;
  form_closed: boolean;
  qr_closed: boolean;
  delete_closed: boolean;
}

const initialState: ManagementState = {
  switch: false,
  form_closed: true,
  qr_closed: true,
  delete_closed: true,
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
    form_close: (state) => {
      state.form_closed = true;
    },
    form_open: (state) => {
      state.form_closed = false;
    },
    qr_close: (state) => {
      state.qr_closed = true;
    },
    qr_open: (state) => {
      state.qr_closed = false;
    },
    delete_close: (state) => {
      state.delete_closed = true;
    },
    delete_open: (state) => {
      state.delete_closed = false;
    },
  },
});

export const {
  switch_print,
  switch_products,
  form_close,
  form_open,
  qr_close,
  qr_open,
  delete_close,
  delete_open,
} = managementSlice.actions;

export default managementSlice.reducer;
