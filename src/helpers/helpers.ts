import * as Yup from "yup";
import { DayWeather } from "../types/types";

export const airQuality = (no2: number) => {
    if(no2>= 0 || no2<50) return "Good"
    if(no2>=50 || no2<100) return "Fair"
    if(no2>=100 || no2<200) return "Moderate"
    if(no2>=200 || no2<400) return "Poor"
    if(no2 >= 400) return "Very Poor"
}


export const fToC = (f: number) => {
    return (f - 32) * 0.5556
}

export const cutTemp = (t: number) => {
    let res = String(t).slice(0, 2);
    let resSpl = res.split('');
    if(resSpl.some(el=>el===".")){
        return resSpl.filter(e => e!==".").join('')
    } else {
        return res
    }
}

export const validationSchema = Yup.object({
    city: Yup.string().matches(/^[a-zA-Z]+$/ , 'We could not find weather information for the location above').required()
  });

export const getDate = (forecast?: DayWeather[], active?: number, ts?: number) => {
    let weekday = 0;
    let hour = 0;
    if(ts) {
        const date = new Date(ts * 1000);
        weekday = date.getDay();
    } else if(forecast && active) {
        const date = new Date(forecast[active].dt * 1000);
        weekday = date.getDay();
        hour = date.getHours();
    } else if (forecast && active === 0) {
        const date = new Date(forecast[active].dt * 1000);
        weekday = date.getDay();
        hour = date.getHours();
    }
    return {weekday, hour};
}