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
    switch_menu: (state) => {
      state.switch = !state.switch;
    },
  },
});

export const { switch_menu } = managementSlice.actions;

export default managementSlice.reducer;
