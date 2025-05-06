import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../api/category";

// Lấy danh mục cha
export const getCategoriesWithChildren = createAsyncThunk(
  "category/getCategoriesWithChildren",
  async (_, thunkAPI) => {
    try {
      const res = await getCategories();

      return res.data; // đảm bảo response trả về dạng { parentCategories: [...] }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.error || err.message);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesWithChildren.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategoriesWithChildren.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategoriesWithChildren.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default categorySlice.reducer;
