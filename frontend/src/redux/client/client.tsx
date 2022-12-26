import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productList } from "../../products_list_example";

interface Product {
  id: number;
  name: string;
  quantity?: number;
  price: number;
}

export interface ClientState {
  switch: boolean;
  switchInfo: { btnName: string; title: string; subtitle?: string };
  products?: Array<Product>;
  total: number;
}

const initialState: ClientState = {
  switch: false,
  switchInfo: {
    btnName: "Order",
    title: "Scan Products",
    subtitle: "scan the products to add to cart",
  },
  products: [],
  total: 0.0,
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    switch_view: (state) => {
      state.switch = !state.switch;
      if (state.switch) {
        state.switchInfo = {
          btnName: "Scan Area",
          title: "Cart Products",
          subtitle: "",
        };
      }
    },
    sumTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    addItem: (state, { payload }) => {
      console.log("Adding?");
      return {
        ...state,
        products: [
          ...state.products!,
          { id: payload.id, name: payload.name, price: payload.price },
        ],
      };
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.products = state.products?.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { switch_view, sumTotal, addItem, removeItem } =
  clientSlice.actions;

export default clientSlice.reducer;
