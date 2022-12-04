import React from 'react';
import TempIcon from '../TempIcon/TempIcon';
import HumWindAir from '../HumWindAir/HumWindAir';
import { WidgetDataContainer, WidgetDataTop, WidgetCity, WidgetDay, WidgetDataBottom } from './WidgetDataStyled';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { fullDaysOfTheWeek, hours } from '../../helpers/helpersNData';

const WidgetData:React.FC = () => {
  const city = useSelector((state: RootState) => state.latLon.city);
  const country = useSelector((state: RootState) => state.latLon.country);
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  const active = useSelector((state: RootState) => state.active.active);
  const date = new Date(forecast && active && forecast[active].dt * 1000);
  const weekday = date.getDay();
  const hour = date.getHours();

  return (
  <WidgetDataContainer>
    <WidgetDataTop>
      {city && <WidgetCity>{city}, {country}</WidgetCity>}
      {forecast.length > 0 && <WidgetDay>{fullDaysOfTheWeek[weekday]} {hours[hour as keyof typeof hours]} • {forecast && forecast[active].weather.length > 0 && forecast[active].weather[0].description}</WidgetDay>}
    </WidgetDataTop>
    <WidgetDataBottom>
      <TempIcon />
      <HumWindAir />
    </WidgetDataBottom>
  </WidgetDataContainer>
  )
}

export default WidgetData;