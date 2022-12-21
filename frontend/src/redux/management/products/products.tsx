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
  products: Array<ProductState>;
  product: any;
  status: string;
  error: any;
}

const initialState: ProductListState = {
  products: [],
  product: null,
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("http://localhost:8000/products/?format=json");
    console.log("DATA=> ", res.data);
    return res.data;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (data: any) => {
    console.log("UPDATING.... PRODUCT");

    const res = await axios.put(
      `http://localhost:8000/products/${data.id}/`,
      data
    );
    console.log("UPDATED DATA=> ", res.data);
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectProductById: (state, action: PayloadAction<number>) => {
      state.product = state.products.find(({ id }) => id === action.payload);
    },
    cleanProduct: (state) => {
      state.product = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "error";
      })
      .addCase(updateProduct.pending, (state) => {
        state.status = "trying the update";
      })
      .addCase(updateProduct.fulfilled, (state) => {
        state.status = "product updated";
      })
      .addCase(updateProduct.rejected, (state) => {
        state.error = "error while updating product";
      });
  },
});

export const { selectProductById, cleanProduct } = productSlice.actions;

export default productSlice.reducer;
