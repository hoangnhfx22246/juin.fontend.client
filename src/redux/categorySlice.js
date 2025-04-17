import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategoriesAPI } from "../api/category";

// 👉 Thunk để gọi API getCategories
export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (params, thunkAPI) => {
    try {
      const response = await getCategoriesAPI();
      return response; // Trả về dữ liệu từ API
    } catch (err) {
      // Có thể là err.response.data nếu dùng axios
      return thunkAPI.rejectWithValue(
        err.response?.data?.errors || err.message
      );
    }
  }
);

const initialState = {
  categories: [],
  selectedCategory: null,
  isLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
