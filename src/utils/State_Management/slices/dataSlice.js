import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../../../services/api';

export const fetchDataThunk = createAsyncThunk('data/fetchData', async (page) => {
  const data = await fetchData(page);
  return data.page['content-items'].content;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    page: 1,
    loading: false,
    error: null,
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.items.push(...action.payload);
        state.loading = false;
      })
      .addCase(fetchDataThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { setSearchTerm, incrementPage } = dataSlice.actions;
export default dataSlice.reducer;
