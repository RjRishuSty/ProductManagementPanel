import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { productApi } from "../../utils/defaultApi";

const initialState = {
  products: [],
  productLength: 0,
  selectedProduct: null,
  loading: false,
  error: null,
};
//* Get All products.............
export const handleGetAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${productApi}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

//* Add New product...............
export const handleAddProduct = createAsyncThunk(
  "product/addProduct",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(productApi, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(
        error.response?.data?.message || "Failed to add product"
      );
    }
  }
);

//* Update existing product ...............
export const handleUpdateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${productApi}/${id}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update product"
      );
    }
  }
);

//* Delete Product ..................
export const handleDeleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${productApi}/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete product"
      );
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetProductState: (state) => {
      state.products = [];
      state.productLength = 0;
      state.selectedProduct = null;
      state.loading = false;
      state.error = null;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder

      //* GET ALL.......
      .addCase(handleGetAllProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(handleGetAllProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.productLength = action.payload.length;
      })
      .addCase(handleGetAllProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //* Add New Product....................
      .addCase(handleAddProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(handleAddProduct.fulfilled, (state, action) => {
        (state.loading = false), state.products.push(action.payload);
        state.productLength += 1;
      })
      .addCase(handleAddProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //* Update existing product....................
      .addCase(handleUpdateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(handleUpdateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (item) => item._id === action.payload._id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(handleUpdateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //* Delete existing product .....................
      .addCase(handleDeleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(handleDeleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (item) => item._id !== action.payload
        );
        state.productLength -= 1;
      })
      .addCase(handleDeleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetProductState, setSelectedProduct, clearSelectedProduct } =
  productSlice.actions;
export default productSlice.reducer;
