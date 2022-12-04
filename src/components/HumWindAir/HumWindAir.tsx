import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../redux/store/store';
import { airQuality } from '../../helpers/helpersNData';

const HumWindAirStyled = styled.div`
  width: 50%;
  text-align: left;
`;

const WeatherCondition = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #222222;
  margin: 0 0 2px 0;
`

const HumWindAir:React.FC = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  const current = useSelector((state: RootState) => state.weather.currentData);
  const active = useSelector((state: RootState) => state.active.active);
  const no2 = useSelector((state: RootState) => state.weather.airQuality);

  return (
      <HumWindAirStyled>
        {active === 0 && current && Object.keys(current).length > 0 && <WeatherCondition>Humidity: {current.humidity}%</WeatherCondition>}
        {active === 0 && current && Object.keys(current).length > 0 && <WeatherCondition>Wind: {current.wind_speed} KPH SE</WeatherCondition>}
        {active !== 0 && forecast && forecast.length > 0 && <WeatherCondition>Humidity: {forecast[active].humidity}%</WeatherCondition>}
        {active !== 0 && forecast && forecast.length > 0 && <WeatherCondition>Wind: {forecast[active].wind_speed} KPH SE</WeatherCondition>}
        {active === 0 && current && Object.keys(current).length > 0 && <WeatherCondition>Air Quality: {airQuality(no2)}</WeatherCondition>}
      </HumWindAirStyled>
  )
}

export default HumWindAir;