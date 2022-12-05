import React from 'react';
import styled from 'styled-components';
import DegreeBtns from '../DegreeBtns/DegreeBtns';
import {fToC, cutTemp} from '../../helpers/helpers';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { endpoints } from '../../apis/endpoints/endpoints';
import { weatherService } from '../../apis/api/api';

const TempIconStyled = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ImgContainerStyled = styled.div`
  width: 50px;
  margin: 0 12px 0 0;
  position: relative;
`;

const IconStyled = styled.img`
  width: 140%;
  position: absolute;
  top: -15px;
  left: -10px;
`;

const DegreesRateStyled = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  color: #000000;
  margin: 0 6px 0 0;
  position: relative;
  top: -8px;
`;

const TempIcon:React.FC = () => {
  const forecast = useSelector((state: RootState) => state.weather.forecast);
  const current = useSelector((state: RootState) => state.weather.currentData);
  const active = useSelector((state: RootState) => state.active.active);
  const isFar = useSelector((state: RootState) => state.farCel.far);

  return (
    <TempIconStyled>
      {active === 0 && current && current.weather && current.weather.length > 0 && (
        <ImgContainerStyled>
          <IconStyled src={weatherService.getIcon(current.weather[0].icon)} alt="weather icon" />
        </ImgContainerStyled>
      )}
      {active === 0 && current && Object.keys(current).length > 0 && <DegreesRateStyled>{isFar ? cutTemp(current.temp) : cutTemp(fToC(current.temp))}°</DegreesRateStyled>}
      {active !== 0 && forecast && forecast.length > 0 && forecast[active].weather.length > 0 && (
        <ImgContainerStyled>
          <IconStyled src={weatherService.getIcon(forecast[active].weather[0].icon)} alt="weather icon" />
        </ImgContainerStyled>
      )} 
      {active !== 0 && forecast && <DegreesRateStyled>{isFar ? cutTemp(forecast[active].temp.eve) : cutTemp(fToC(forecast[active].temp.eve))}°</DegreesRateStyled>}
      {active === 0 && current && Object.keys(current).length > 0 && <DegreeBtns />}
      {active !== 0 && forecast && forecast.length > 0 && <DegreeBtns />}
    </TempIconStyled>
  )
}

export default TempIcon;