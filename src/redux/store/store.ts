import { configureStore, combineReducers } from '@reduxjs/toolkit';
import weatherReducer from '../slices/weatherStateSlice';
import activeReducer from '../slices/activeStateSlice';
import farCelReducer from '../slices/farCelStateSlice';

export const rootReducer = combineReducers({
  weather: weatherReducer,
  active: activeReducer,
  farCel: farCelReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;