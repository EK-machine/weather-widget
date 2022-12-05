import React from 'react';
import { setFarCel } from '../../redux/slices/farCelStateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFar } from '../../redux/selectors/selectors';
import { DegreeBtnsStyled, DegreeBtnStyled, DegreeBtnActiveStyled } from './DegreeBtnsStyled';

const DegreeBtns:React.FC = () => {
  const isFar = useSelector(selectFar);
  const dispatch = useDispatch()
  const handleFClick = () => {
    dispatch(setFarCel(true));
  };

  const handleCClick = () => {
    dispatch(setFarCel(false));
  };

  return (
    <DegreeBtnsStyled>
      {isFar ? (<DegreeBtnActiveStyled onClick={handleFClick}>F</DegreeBtnActiveStyled>) : (<DegreeBtnStyled onClick={handleFClick}>F</DegreeBtnStyled>)}
        /
      {isFar ? (<DegreeBtnStyled onClick={handleCClick}>C</DegreeBtnStyled>) : (<DegreeBtnActiveStyled onClick={handleCClick}>C</DegreeBtnActiveStyled>)}
    </DegreeBtnsStyled>
  )
}

export default DegreeBtns;