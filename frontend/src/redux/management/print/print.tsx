import { createSlice } from "@reduxjs/toolkit";

export interface PrintState {
  quantity: number;
  size: string;
}

const initialState: PrintState = {
  quantity: 0,
  size: "medium",
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
          state.size = "large";
          break;
        case "medium":
          state.size = "medium";
          break;
        case "small":
          state.size = "small";
          break;
        default:
          state.size = "medium";
      }
    },
  },
});

export const { add_quantity, sub_quantity, change_size } = printSlice.actions;

export default printSlice.reducer;
