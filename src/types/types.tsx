import { string } from "yup";

export interface DayWeather {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: {day: number; night: number; eve: number; morn: number;}
    humidity: number;
    moon_phase: number;
    moonrise: number; 
    moonset: number; 
    pop: number;
    pressure: number;
    sunrise: number; 
    sunset: number; 
    temp: {day: number; 
        eve: number; 
        max: number; 
        min: number; 
        morn: number; 
        night: number;}
    uvi: number; 
    weather:[{id: number; main: string; description: string; icon: string;}]
    wind_deg: number; 
    wind_gust: number; 
    wind_speed: number; 
}

export interface CurrentWeather {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: {id: number; main: string; description: string; icon: string}[];
    wind_deg: number;
    wind_speed: number;
}

export interface LatLonCity {name: string; lat: number; lon: number; country: string}
export interface LatLon {lat: number; lon: number}

export interface LatLonData {
    data: LatLonCity[]
}

export interface WeatherData {
    data: {
        current: CurrentWeather;
        daily: DayWeather[];
    }
}

export interface AirQuality {
    components: {
        co: number;
        nh3: number;
        no: number;
        no2: number;
        o3: number;
        pm2_5: number;
        pm10: number;
        so2: number;
    }
}

export interface AirQualityData {
    data: {
        list: AirQuality[]
    }
}

export interface DayBtnProps {
    max: number;
    min: number;
    timestamp: number;
    icon: string;
    ind: number;
}


