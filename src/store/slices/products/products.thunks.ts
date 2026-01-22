import { ENV } from '@app/config';
import { Product } from '@app/types';
import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';


export const getProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${ENV.API_URL}/product`);
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  'products/create',
  async (productData: Partial<Product>, { rejectWithValue }) => {
    try {
      const response = await fetch(`${ENV.API_URL}/product`,{
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(productData)
      });
      if(!response.ok){
        throw new Error(`Server error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    }catch (error: any){
      return rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
    'products/update',
    async ({id, updates }: {id: string; updates: Partial<Product>}, { rejectWithValue }) => {
      try  {
        const response = await fetch(`${ENV.API_URL}/product `)
      }
    }
)