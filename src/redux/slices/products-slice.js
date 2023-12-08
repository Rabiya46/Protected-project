import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductData = createAsyncThunk(
  "product/getProductData",
  async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);
      return response.data.products;
    } catch (error) {
      return error.message;
    }
  }
);

const initialState = {
  products: [],
  status: null,
  error: null,
};
export const productSlice = createSlice({
  name: "productStore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductData.fulfilled, (state, { payload }) => {
        state.status = "resolved";
        state.products = payload;
      })
      .addCase(getProductData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProductData.rejected, (state, { payload }) => {
        state.status = "rejected";
        state.error = payload;
      });
  },
});
