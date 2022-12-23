import { createSlice } from "@reduxjs/toolkit";

export interface PrintState {
  quantity: number;
  print_size: string;
  qr_size: string;
  text_size: string;
  text_price: string;
}

const initialState: PrintState = {
  quantity: 0,
  print_size: "24rem",
  qr_size: "16rem",
  text_size: "text-2xl",
  text_price: "text-6xl",
};

export const printSlice = createSlice({
  name: "print",
  initialState,
  reducers: {
    add_quantity: (state) => {
      state.quantity += 1;
    },
    sub_quantity: (state) => {
      if (state.quantity >= 1) {
        state.quantity -= 1;
      }
    },
    change_size: (state, { payload }) => {
      switch (payload) {
        case "large":
          state.print_size = "24rem";
          state.qr_size = "16rem";
          state.text_size = "text-2xl";
          state.text_price = "text-6xl";
          break;
        case "medium":
          state.print_size = "18rem";
          state.qr_size = "10rem";
          state.text_size = "text-xl";
          state.text_price = "text-2xl";
          break;
        case "small":
          state.print_size = "10rem";
          state.qr_size = "7rem";
          state.text_size = "hidden";
          state.text_price = "text-xs";
          break;
        default:
          state.print_size = "24rem";
          state.qr_size = "16rem";
          state.text_size = "text-2xl";
          state.text_price = "text-6xl";
      }
    },
  },
});

export const { add_quantity, sub_quantity, change_size } = printSlice.actions;

export default printSlice.reducer;
