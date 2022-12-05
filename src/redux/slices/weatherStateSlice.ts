import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { WeatherResponse, InitialState } from '../../types/types';
import {weatherService} from '../../apis/api/api';

const initialState: InitialState = {
  weatherRequest: false,
  city: null,
  country: null,
  forecast: null,
  currentData: null,
  airQuality: 0,
  status: '',
  error: null,
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (inp: string, {rejectWithValue}) => {
    let lat = null;
    let lon = null;
    let city = "";
    let country = "";
    let err = "";
    let dailyWeather = null;
    let currentData = null;
    let airQuality = null;

    try{
      const data = await weatherService.getLatLonCityCountry(inp)
      lat = data.lat;
      lon = data.lon;
      city = data.city;
      country = data.country;
      if(lat && lon) {
        const weatherResp = await weatherService.getWeather(lat, lon);     
        const airResp = await weatherService.getAirPolution(lat, lon);
        dailyWeather = weatherResp.dailyWeather;
        currentData = weatherResp.currentData;
        airQuality = airResp; 
      }
    } catch(e){
      return rejectWithValue("We could not find weather information for the location above");
    }
    return {city, country, err, dailyWeather, currentData, airQuality}; 
  }
);

const weatherStateSlice = createSlice({
  name: 'weather',
  initialState: initialState,
  reducers: {
    getWeatherRequest: (state, action: PayloadAction<string>) => {
      state.weatherRequest = initialState.weatherRequest;
      state.error = initialState.error;
    },
    getWeatherSucess: (state, action: PayloadAction<WeatherResponse>) => {
      state.airQuality = action.payload.airQuality;
      state.city = action.payload.city;
      state.country = action.payload.country;
      state.currentData = action.payload.currentData;
      state.forecast = action.payload.forecast;
      state.error = initialState.error;
    },
    getWeatherFailed: (state) => {
      state.weatherRequest = initialState.weatherRequest;
      state.error = "We could not find weather information for the location above";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.status = 'loading';
      state.error = initialState.error;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.airQuality = action.payload.airQuality as number;
      state.city = action.payload.city;
      state.country = action.payload.country;
      state.currentData = action.payload.currentData;
      state.forecast = action.payload.dailyWeather;
      state.status = 'resolved';
      state.error = initialState.error;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      console.log(action.payload);
      state.status = 'rejected';
      state.error = action.payload as string;
    });
  },
});

export const { getWeatherRequest, getWeatherSucess, getWeatherFailed } = weatherStateSlice.actions;

export default weatherStateSlice.reducer;

