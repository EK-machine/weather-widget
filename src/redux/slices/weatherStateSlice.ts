import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { endpoints } from '../../apis/endpoints/endpoints';
import { DayWeather, WeatherData, AirQualityData, LatLon, CurrentWeather } from '../../types/types';
import axios from 'axios';

const initialState = {
  forecastRequest: [],
  forecast: [] as DayWeather[],
  currentData: {} as CurrentWeather,
  airQuality: 0,
  status: '',
  error: '',
};

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async ({lat, lon}: LatLon, {rejectWithValue}) => {
      let dailyWeather;
      let currentData;
      try {
        const response: WeatherData = await axios.get(endpoints.cityWeather(lat, lon));
        dailyWeather = response.data.daily;
        currentData = response.data.current;
      } catch (error) {
        return rejectWithValue("We could not find weather information for the location above");
      }
    return {dailyWeather, currentData}; 
    }
);

export const fetchAirQuality = createAsyncThunk(
  'weather/fetchAirQuality',
  async ({lat, lon}: LatLon) => {
  const response: AirQualityData = await axios.get(endpoints.cityAirPolution(lat, lon));
  return response.data.list[0].components.no2; 
  }
);

const weatherStateSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {
    getWeatherReq: (state) => {
      state.forecastRequest = initialState.forecastRequest;
      state.forecast = initialState.forecast;
    },
    getWeatherSucess: (state, action: PayloadAction<DayWeather[]>) => {
      state.forecastRequest = initialState.forecastRequest;
      state.forecast = action.payload;
    },
    getWeatherFailed: (state, action: PayloadAction<DayWeather>) => {
      state.forecastRequest = initialState.forecastRequest;
      state.forecast = initialState.forecast;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = 'loading';
      state.error = '';
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.forecast = action.payload.dailyWeather;
      state.currentData = action.payload.currentData;
      state.status = 'resolved';
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.forecastRequest = initialState.forecastRequest;
      state.status = 'rejected';
      state.error = action.payload as string;
    });
    builder.addCase(fetchAirQuality.pending, (state) => {
      state.status = 'loading';
      state.error = '';
    });
    builder.addCase(fetchAirQuality.fulfilled, (state, action) => {
      state.airQuality = action.payload
      state.status = 'resolved';
    });
    builder.addCase(fetchAirQuality.rejected, (state) => {
      state.airQuality = initialState.airQuality;
      state.status = 'rejected';
    });
  },
});

export const { getWeatherReq, getWeatherSucess, getWeatherFailed } = weatherStateSlice.actions;

export default weatherStateSlice.reducer;

