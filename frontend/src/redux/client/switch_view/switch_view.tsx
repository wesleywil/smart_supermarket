import { createSlice } from "@reduxjs/toolkit";

export interface SwitchViewState {
  switch: boolean;
}

const initialState: SwitchViewState = {
  switch: false,
};

export const switchViewSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    switch_view: (state) => {
      state.switch = !state.switch;
    },
  },
});

export const { switch_view } = switchViewSlice.actions;

export default switchViewSlice.reducer;
