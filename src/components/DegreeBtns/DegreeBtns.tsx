import React from 'react';
import styled from 'styled-components';
import { setFarCel } from '../../redux/slices/farCelStateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

const DegreeBtnsStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #000000;
`;

const DegreeBtnStyled = styled.button`
  display: flex;
  justify-content: flex-start;
  outline: none;
  border: none;
  color: #888888;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
`;

const DegreeBtnActiveStyled = styled.button`
  display: flex;
  justify-content: flex-start;
  outline: none;
  border: none;
  color: #000000;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  text-decoration: underline;
`;

const DegreeBtns:React.FC = () => {
  const isFar = useSelector((state: RootState) => state.farCel.far);
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