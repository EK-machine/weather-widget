import React from 'react';
import TempIcon from '../TempIcon/TempIcon';
import HumWindAir from '../HumWindAir/HumWindAir';
import { WidgetDataContainer, WidgetDataTop, WidgetCity, WidgetDay, WidgetDataBottom } from './WidgetDataStyled';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { fullDaysOfTheWeek, hours } from '../../helpers/data';
import { getDate } from '../../helpers/helpers';
import { DayWeather } from '../../types/types';

const WidgetData:React.FC = () => {
  const city = useSelector((state: RootState) => state.weather.city);
  const country = useSelector((state: RootState) => state.weather.country);
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  const active = useSelector((state: RootState) => state.active.active);
  const { weekday, hour } = getDate(forecast as DayWeather[], active);

  return (
  <WidgetDataContainer>
    <WidgetDataTop>
        {city && country && <WidgetCity>{city}, {country}</WidgetCity>}
        {forecast && <WidgetDay>{fullDaysOfTheWeek[weekday]} {hours[hour as keyof typeof hours]} • {forecast[active].weather[0].description}</WidgetDay>}
    </WidgetDataTop>
    <WidgetDataBottom>
      <TempIcon />
      <HumWindAir />
    </WidgetDataBottom>
  </WidgetDataContainer>
  )
}

export default WidgetData;