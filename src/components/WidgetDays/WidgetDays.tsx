import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DayBtn from '../DayBtn/DayBtn';
import styled from 'styled-components';
import { RootState } from '../../redux/store/store';
import { DayWeather } from '../../types/types';

const WidgetDaysContainer = styled.div`
  height: 143px;
`;

const WidgetDays:React.FC = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);

  return (
    <WidgetDaysContainer>
      {forecast && (forecast as DayWeather[]).map((el, ind) => (
        <DayBtn key={el.dt}
          max={el.temp.max}
          min={el.temp.min}
          timestamp={el.dt}
          icon={el.weather[0].icon}
          ind={ind}
        />
      ))}
    </WidgetDaysContainer>
  )
}

export default WidgetDays

