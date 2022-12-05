import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectHumidity, selectWind, selectAirQuality } from '../../redux/selectors/selectors';

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
  const humidity = useSelector(selectHumidity);
  const wind = useSelector(selectWind);
  const air = useSelector(selectAirQuality);

  return (
      <HumWindAirStyled>
        {humidity && <WeatherCondition>Humidity: {humidity}%</WeatherCondition>}
        {wind && <WeatherCondition>Wind: {wind} KPH SE</WeatherCondition>}
        {air && <WeatherCondition>Air Quality: {air}</WeatherCondition>}
      </HumWindAirStyled>
  )
}

export default HumWindAir;