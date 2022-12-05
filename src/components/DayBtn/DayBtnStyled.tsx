import styled from 'styled-components';

export const DayBtnStyled = styled.button`
    height: 100%;
    width: 12.5%;
    padding: 20px 0 0 0;
    outline: none;
    border: 1px solid rgba(150, 150, 150, 0.3);
    background-color: transparent;
    cursor: pointer;
`;

export const DayStyled = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    color: #000000;
    margin: 0 0 13px 0;
    text-transform: capitalize;
`;

export const DayIconContStyled = styled.div`
  margin: 0 auto;
  width: 38px;
  height: 32px;
`;

export const DayIconStyled = styled.img`
  width: 140%;
  position: relative;
  top: -14px;
  left: -7px;
`;

export const HighTemp = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    color: #000000;
    margin: 0 0 2px 0;
`;

export const LowTemp = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #000000;
    margin: 0;
`;