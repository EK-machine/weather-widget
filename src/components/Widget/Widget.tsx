import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import WidgetData from '../WidgetData/WidgetData';
import WidgetDays from '../WidgetDays/WidgetDays';
import { RootState } from '../../redux/store/store';
import Cloud from '../../images/cloud.svg'

const WidgetContainer = styled.div`
  max-height: 300px;
  height: 300px;
  background: #FFFFFF;
  border: 1px solid rgba(150, 150, 150, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;
`;

const ErrorContainer = styled.div`
  display: flex;
  padding: 57px 0 0 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #333333;
  margin: 0px;
`;

const ErrorImg = styled.img`
  width: 150px;
`;


const Widget:React.FC = () => {
  const latLonErr = useSelector((state: RootState) => state.latLon.error);
  const weatherErr = useSelector((state: RootState) => state.weather.error);
  console.log("latLonErr", latLonErr)
  console.log("weatherErr", weatherErr)




  return (
    <WidgetContainer>
      {latLonErr === "" && weatherErr === "" ? (
        <>
          <WidgetData />
          <WidgetDays />
        </>
      ) : (
        <ErrorContainer>
          <ErrorImg src={Cloud} alt="err" />
          <ErrorMessage>{latLonErr}</ErrorMessage>
        </ErrorContainer>
      )}
    </WidgetContainer>
  )};

export default Widget