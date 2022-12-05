import React from 'react';
import { DayBtnProps } from '../../types/types';
import { cutTemp, fToC, getDate } from '../../helpers/helpers';
import { daysOfTheWeek } from '../../helpers/data';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../redux/slices/activeStateSlice';
import { weatherService } from '../../apis/api/api';
import { selectActive, selectFar } from '../../redux/selectors/selectors';
import { DayBtnStyled, DayStyled, DayIconContStyled, DayIconStyled, HighTemp, LowTemp} from './DayBtnStyled';

const DayBtn:React.FC<DayBtnProps> = ({max, min, timestamp, icon, ind}) => {
  const active = useSelector(selectActive);
  const isFar = useSelector(selectFar);
  const dispatch = useDispatch();
  const {weekday} = getDate(undefined, undefined, timestamp)
  const handleClick = () => {
    dispatch(setActive(ind))
  }

  return (
    <DayBtnStyled style={active === ind ? {backgroundColor: '#F7F7F7'}: {backgroundColor: 'transparent'}} onClick={handleClick}>
      <DayStyled>{daysOfTheWeek[weekday]}</DayStyled>
      <DayIconContStyled>
        <DayIconStyled src={weatherService.getIcon(icon)} alt="weather icon" />
      </DayIconContStyled>
      <>
        <HighTemp>{isFar ? cutTemp(max) : cutTemp(fToC(max))}°</HighTemp>
        <LowTemp>{isFar ? cutTemp(min) : cutTemp(fToC(min))}°</LowTemp>
      </>
    </DayBtnStyled>
  )
}

export default DayBtn