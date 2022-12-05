import React from 'react';
import TempIcon from '../TempIcon/TempIcon';
import HumWindAir from '../HumWindAir/HumWindAir';
import { WidgetDataContainer, WidgetDataTop, WidgetCity, WidgetDay, WidgetDataBottom } from './WidgetDataStyled';
import { useSelector } from 'react-redux';
import { selectCity, selectCountry, selectWeatherDescr, selectWeekdays, selectHours } from '../../redux/selectors/selectors';

const WidgetData:React.FC = () => {
  const city = useSelector(selectCity);
  const country = useSelector(selectCountry);
  const description = useSelector(selectWeatherDescr);
  const fullDay = useSelector(selectWeekdays);
  const hourAmPm = useSelector(selectHours);

  return (
  <WidgetDataContainer>
    <WidgetDataTop>
        {city && country && <WidgetCity>{city}, {country}</WidgetCity>}
        {description && fullDay && hourAmPm && <WidgetDay>{fullDay} {hourAmPm} • {description}</WidgetDay>}
    </WidgetDataTop>
    <WidgetDataBottom>
      <TempIcon />
      <HumWindAir />
    </WidgetDataBottom>
  </WidgetDataContainer>
  )
}

export default WidgetData;