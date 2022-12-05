import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { airQuality } from '../../helpers/helpers';
import { weatherService } from "../../apis/api/api";
import {fToC, cutTemp} from '../../helpers/helpers';
import { getDate } from '../../helpers/helpers';
import { fullDaysOfTheWeek, hours } from '../../helpers/data';

export const selectCity = (state: RootState) => state.weather.city;
export const selectCountry = (state: RootState) => state.weather.country;
export const selectForecast = (state: RootState) => state.weather.forecast;
export const selectCurrent = (state: RootState) => state.weather.currentData;
export const selectActive = (state: RootState) => state.active.active;
export const selectFar = (state: RootState) => state.farCel.far;
export const selectAir = (state: RootState) => state.weather.airQuality;
export const selectError = (state: RootState) => state.weather.error;

// humidity wind air
export const selectHumidity = createSelector([
    selectActive, selectCurrent, selectForecast
], (active, current, forecast)=>{
    if(active === 0) {
        if(current){
            return current.humidity;
        }
    } else {
        if(forecast) {
            return forecast[active].humidity;
        }
    }
});

export const selectWind = createSelector([
    selectActive, selectCurrent, selectForecast
], (active, current, forecast)=>{
    if(active === 0) {
        if(current){
            return current.wind_speed;
        }
    } else {
        if(forecast) {
            return forecast[active].wind_speed;
        }
    }
});

export const selectAirQuality = createSelector(
    [selectActive, selectAir, selectCurrent, selectForecast],
    (active, no2, current, forecast) => {
        if(current && forecast) {
            if(active === 0) {
                return airQuality(no2)
            } else {
                return null
            }
        }
    }
);
// humidity wind air
// temperature and icon
export const selectTemperature = createSelector(
    [selectActive, selectCurrent, selectForecast, selectFar],
    (active, current, forecast, isFar) => {
        if(forecast && current) {
            if(active === 0) {
                if(isFar){
                    return cutTemp(current.temp);
                } else {
                    return cutTemp(fToC(current.temp));
                }
            } else {
                if(isFar){
                    return cutTemp(forecast[active].temp.eve);
                } else {
                    return cutTemp(fToC(forecast[active].temp.eve));
                } 
            }
        }
    }
);

export const selectIcon = createSelector(
    [selectActive, selectCurrent, selectForecast], 
    (active, current, forecast)=>{
        if(forecast && current) {
            if(active === 0){
                return weatherService.getIcon(current.weather[0].icon);
            } else {
                return weatherService.getIcon(forecast[active].weather[0].icon);
            }
        }
    }
);

export const selectShowBtns = createSelector(
    [selectCurrent, selectForecast], 
    (current, forecast)=>{
        if(forecast && current) {
            return true;
        } else {
            return false;
        }
    }
);
// temperature and icon
// weekdays hours description
export const selectWeekdays = createSelector(
    [selectActive, selectForecast],
    (active, forecast) => {
        if(forecast){
            const { weekday } = getDate(forecast, active);
            const fullDay = fullDaysOfTheWeek[weekday];
            return fullDay;
        }
    }
);

export const selectHours = createSelector(
    [selectActive, selectForecast],
    (active, forecast) => {
        if(forecast){
            const { hour } = getDate(forecast, active);
            const hourAmPm = hours[hour as keyof typeof hours];
            return hourAmPm;
        }
    }
);

export const selectWeatherDescr = createSelector(
    [selectActive, selectForecast],
    (active, forecast) => {
        if(forecast){
            return forecast[active].weather[0].description;
        }
    }
);
// weekdays hours description
