import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const DISPLAY_ALL = 'continents/missions/DISPLAY_ALL';
const continentsUrl = 'https://disease.sh/v3/covid-19/continents';

export const displayCountries = createAsyncThunk((DISPLAY_ALL), async () => {
  const response = await axios.get(continentsUrl);
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
