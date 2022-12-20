import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface ProductState {
  id: number;
  name: string;
  description: string;
  qrcode: string;
  price: number;
}

export interface ProductListState {
  products: Array<ProductListState>;
  status: string;
  error: any;
}

const initialState: ProductListState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://localhost:8000/products/?format=json");
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.products = payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "error";
      });
  },
});

export default productSlice.reducer;
