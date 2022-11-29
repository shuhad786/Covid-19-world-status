import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAY_ALL = 'space-traveler/missions/DISPLAY_ALL';
const baseUrl = 'https://api.openbrewerydb.org/breweries';

export const displayCountries = createAsyncThunk((DISPLAY_ALL), async () => {
  const response = await axios.get(baseUrl);
  return response.data;
});

const CountriesSlice = createSlice({
  name: 'continent',
  initialState: {
    countries: [],
  },
  extraReducers: (builder) => {
    builder.addCase(displayCountries.fulfilled, (state, action) => {
      const update = state;
      update.countries = action.payload.map((item) => ({ ...item }));
    });
  },
});

export default CountriesSlice;