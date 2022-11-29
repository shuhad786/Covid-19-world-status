import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CountriesSlice from './cards/allCardSlice';
import brewerySlice from './cards/cardSlice';

const rootReducers = combineReducers({
  countries: CountriesSlice.reducer,
  brewery: brewerySlice.reducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
