import { createSlice } from "@reduxjs/toolkit";

export interface ClientState {
  switch: boolean;
  switchInfo: { btnName: string; title: string; subtitle?: string };
}

const initialState: ClientState = {
  switch: false,
  switchInfo: { btnName: "", title: "", subtitle: "" },
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    switch_view: (state) => {
      state.switch = !state.switch;
    },
  },
});

export const { switch_view } = clientSlice.actions;

export default clientSlice.reducer;
