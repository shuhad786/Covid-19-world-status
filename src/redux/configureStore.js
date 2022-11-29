import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import CountriesSlice from './cards/allCardSlice';
import brewerySlice from './cards/cardSlice';

const rootReducers = combineReducers({
  countries: CountriesSlice.reducer,
  brewery: brewerySlice.reducer,
});

const store = configureStore({
  reducer: rootReducers,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
