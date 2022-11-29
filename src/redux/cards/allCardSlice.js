import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAY_ALL = 'brewery/missions/DISPLAY_ALL';
// const baseUrl = 'https://api.openbrewerydb.org/breweries';
const typeUrl = 'https://api.openbrewerydb.org/breweries?by_type=large';

export const displayCountries = createAsyncThunk((DISPLAY_ALL), async () => {
  const response = await axios.get(typeUrl);
  return response.data;
});

const CountriesSlice = createSlice({
  name: 'continent',
  initialState: {
    countries: [],
    types: [],
  },
  extraReducers: (builder) => {
    builder.addCase(displayCountries.fulfilled, (state, action) => {
      const update = state;
      update.countries = action.payload.map((item) => ({ ...item }));
      action.payload.forEach((item) => {
        if (!update.types.includes(item.brewery_type)) {
          update.types.push(item.brewery_type);
        }
      });
    });
  },
});

export default CountriesSlice;
