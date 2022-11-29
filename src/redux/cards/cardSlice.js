import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAY_ITEM = 'space-traveler/missions/DISPLAY_ITEM';
const baseUrl = 'https://api.openbrewerydb.org/breweries';

export const displayBrewery = createAsyncThunk((DISPLAY_ITEM), async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
});

const brewerySlice = createSlice({
  name: 'brewery',
  initialState: {
    brewery: [],
  },
  extraReducers: (builder) => {
    builder.addCase(displayBrewery.fulfilled, (state, action) => {
      const update = state;
      update.brewery = action.payload.map((item) => ({ ...item }));
    });
  },
});

export default brewerySlice;
