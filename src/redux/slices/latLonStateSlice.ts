import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { LatLon, LatLonData } from '../../types/types';
import axios from 'axios';
import { endpoints } from '../../apis/endpoints/endpoints';

const initialState = {
  latLonReq: [],
  city: '',
  country: '',
  lat: 0,
  lon: 0,
  status: '',
  error: '',
}

export const fetchLatLon = createAsyncThunk(
  'latLon/fetchLatLon',
  async (inp: string, {rejectWithValue}) => {
    let lat = 0;
    let lon = 0;
    let city = "";
    let country = "";
    let err = "";
    try{
      const response: LatLonData = await axios.get(endpoints.cityLatLon(inp));
      lat = response.data[0].lat;
      lon = response.data[0].lon;
      city = response.data[0].name;
      country = response.data[0].country;
    } catch(e){
      return rejectWithValue("We could not find weather information for the location above");
    }
    return {lat, lon, city, country, err}; 
  }
)

const latLonStateSlice = createSlice({
  name: 'latLon',
  initialState: initialState,
  reducers: {
    getLatLonRequest: (state, action: PayloadAction<string>) => {
      state.latLonReq = initialState.latLonReq;
    },
    getLatLonSucess: (state, action: PayloadAction<LatLon>) => {
      state.latLonReq = initialState.latLonReq;
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
    getLatLonFailed: (state) => {
      state.latLonReq = initialState.latLonReq;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLatLon.pending, (state) => {
      state.status = 'loading';
      state.error = '';
    });
    builder.addCase(fetchLatLon.fulfilled, (state, action) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
      state.city = action.payload.city;
      state.country = action.payload.country;
      state.latLonReq = initialState.latLonReq;
      state.status = 'resolved';
    });
    builder.addCase(fetchLatLon.rejected, (state, action) => {
      state.latLonReq = initialState.latLonReq;
      state.status = 'rejected';
      state.error = action.payload as string;
    });
  },
});

export const { getLatLonRequest, getLatLonSucess, getLatLonFailed } = latLonStateSlice.actions;

export default latLonStateSlice.reducer;
