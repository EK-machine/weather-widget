const cityLatLon = (city: string) => `geo/1.0/direct?q=${city}&limit=1&appid=1c5da32bd6a0d1c4c017b21b49833c7f`;

const cityWeather = (la: string, lo: string) => `onecall?lat=${la}&lon=${lo}&exclude=minutely,hourly,alerts&units=imperial&appid=1c5da32bd6a0d1c4c017b21b49833c7f`;

const cityAirPolution = (la: string, lo: string) => `data/2.5/air_pollution?lat=${la}&lon=${lo}&appid=1c5da32bd6a0d1c4c017b21b49833c7f`;

const weatherIcon = (icon: string) => `http://openweathermap.org/img/wn/${icon}@2x.png`

export const endpoints = {
    cityLatLon,
    weatherIcon,
    cityWeather,
    cityAirPolution,
}