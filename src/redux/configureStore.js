import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CountriesSlice from './cards/allCardSlice';

const rootReducers = combineReducers({
  countries: CountriesSlice.reducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
