import React from "react";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://fakestoreapi.com/products";

export const fetchProductsAsync = createAsyncThunk("products/fetchProducts",
async (_, thunkAPI) => {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
    
    // Parse the response data to match the Product interface
    const parsedData = response.data.map((product:Product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
      rating: {
        rate: product.rating.rate,
        count: product.rating.count
      }
    }));

    return parsedData;
  } catch (err) {
    console.error(err);
    throw err;
  }
},)

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category:string;
  rating:{
    rate:number ;
    count:number;
  }
}

export type  {Product};
export type Products = Product[];
export interface ProductsState {
  products: Products;
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
}

const initialState: ProductsState = {
  products:  [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(
        fetchProductsAsync.fulfilled,
        (state, action: PayloadAction<Products>) => {
          state.products = action.payload;
          state.isLoading = false;
        },
      )
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.isError = true;
        state.errorMessage = action.error.message || "Failed to fetch products";
        state.isLoading = false;
      });
  },
});

export default productsSlice.reducer;
