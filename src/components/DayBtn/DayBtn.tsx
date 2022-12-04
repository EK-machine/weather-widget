import React from 'react';
import styled from 'styled-components';
import { DayBtnProps } from '../../types/types';
import { endpoints } from '../../apis/endpoints/endpoints';
import { daysOfTheWeek, cutTemp, fToC } from '../../helpers/helpersNData';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { setActive } from '../../redux/slices/activeStateSlice';

const DayBtnStyled = styled.button`
    height: 100%;
    width: 12.5%;
    padding: 20px 0 0 0;
    outline: none;
    border: 1px solid rgba(150, 150, 150, 0.3);
    background-color: transparent;
    cursor: pointer;
`;

const DayStyled = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    color: #000000;
    margin: 0 0 13px 0;
    text-transform: capitalize;
`;

const DayIconContStyled = styled.div`
  margin: 0 auto;
  width: 38px;
  height: 32px;
`;

const DayIconStyled = styled.img`
  width: 140%;
  position: relative;
  top: -14px;
  left: -7px;
`;

const HighTemp = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: #000000;
    margin: 0 0 2px 0;
`;

const LowTemp = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #000000;
    margin: 0;
`;

const DayBtn:React.FC<DayBtnProps> = ({max, min, timestamp, icon, ind}) => {
  const active = useSelector((state: RootState) => state.active.active);
  const isFar = useSelector((state: RootState) => state.farCel.far);
  const dispatch = useDispatch();
  const date = new Date(timestamp * 1000);
  const weekday = date.getDay();
  const handleClick = () => {
    dispatch(setActive(ind))
  }

  return (
    <DayBtnStyled style={active === ind ? {backgroundColor: '#F7F7F7'}: {backgroundColor: 'transparent'}} onClick={handleClick}>
      <DayStyled>{daysOfTheWeek[weekday]}</DayStyled>
      <DayIconContStyled>
        <DayIconStyled src={endpoints.weatherIcon(icon)} alt="weather icon" />
      </DayIconContStyled>
      <>
        <HighTemp>{isFar ? cutTemp(max) : cutTemp(fToC(max))}°</HighTemp>
        <LowTemp>{isFar ? cutTemp(min) : cutTemp(fToC(min))}°</LowTemp>
      </>
    </DayBtnStyled>
  )
}

export default DayBtn