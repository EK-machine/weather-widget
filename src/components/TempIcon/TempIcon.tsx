import React from 'react';
import DegreeBtns from '../DegreeBtns/DegreeBtns';
import { useSelector } from 'react-redux';
import { selectIcon, selectShowBtns, selectTemperature } from '../../redux/selectors/selectors';
import {TempIconStyled, ImgContainerStyled, IconStyled, DegreesRateStyled } from './TempIconStyled';

const TempIcon:React.FC = () => {
  const icon = useSelector(selectIcon);
  const temperature = useSelector(selectTemperature);
  const showBtns = useSelector(selectShowBtns);

  return (
    <TempIconStyled>
      {icon && (
        <ImgContainerStyled>
          <IconStyled src={icon} alt="weather icon" />
        </ImgContainerStyled>
      )}
      {temperature && <DegreesRateStyled>{temperature}°</DegreesRateStyled>}
      {showBtns && <DegreeBtns />}
    </TempIconStyled>
  )
}

export default TempIcon;