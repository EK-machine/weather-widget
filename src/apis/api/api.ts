import axios from 'axios';
import { AirQualityData, LatLonData, WeatherData } from '../../types/types';
import { endpoints } from '../endpoints/endpoints'

const instanceAirLatLon = axios.create({
    baseURL: 'http://api.openweathermap.org/',
    headers: {
        'Content-Type': 'application/json'
    },
});

const instanceWeather = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    headers: {
        'Content-Type': 'application/json'
    },
});

export const weatherService = {
    getLatLonCityCountry: async (inp: string) => {
        const response: LatLonData = await instanceAirLatLon.get(endpoints.cityLatLon(inp));
        let lat = response.data[0].lat;
        let lon = response.data[0].lon;
        let city = response.data[0].name;
        let country = response.data[0].country;
        return {lat, lon, city, country}
    },
    getWeather: async (lat: number, lon: number) => {
        const latt = lat.toString();
        const long = lon.toString();
        const response: WeatherData = await instanceWeather.get(endpoints.cityWeather(latt, long));
        let dailyWeather = response.data.daily;
        let currentData = response.data.current;
        return {dailyWeather, currentData}
    },
    getAirPolution: async (lat: number, lon: number) => {
        const latt = lat.toString();
        const long = lon.toString();
        const response: AirQualityData = await instanceAirLatLon.get(endpoints.cityAirPolution(latt, long));
        let airQuality = response.data.list[0].components.no2;
        return airQuality
    },
    getIcon: (inp: string) => {
        return endpoints.weatherIcon(inp)
    },
};