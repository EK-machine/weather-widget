const cityLatLon = (city: string) => `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=1c5da32bd6a0d1c4c017b21b49833c7f`;

const cityWeather = (la: number, lo: number) => {
    const lat = la.toString();
    const lon = lo.toString();
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=1c5da32bd6a0d1c4c017b21b49833c7f`
};

const cityAirPolution = (la: number, lo: number) => {
    const lat = la.toString();
    const lon = lo.toString();
    return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=1c5da32bd6a0d1c4c017b21b49833c7f`
};

const weatherIcon = (icon: string) => `http://openweathermap.org/img/wn/${icon}@2x.png`

export const endpoints = {
    cityLatLon,
    weatherIcon,
    cityWeather,
    cityAirPolution,
}