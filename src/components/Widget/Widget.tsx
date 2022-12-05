import React from 'react';
import { useSelector } from 'react-redux';
import WidgetData from '../WidgetData/WidgetData';
import WidgetDays from '../WidgetDays/WidgetDays';
import Cloud from '../../images/cloud.svg'
import { selectError } from '../../redux/selectors/selectors';
import { WidgetContainer, ErrorContainer, ErrorMessage, ErrorImg } from './WidgetStyled';


const Widget:React.FC = () => {
  const err = useSelector(selectError);
  
  return (
    <WidgetContainer>
      {!err ? (
        <>
          <WidgetData />
          <WidgetDays />
        </>
      ) : (
        <ErrorContainer>
          <ErrorImg src={Cloud} alt="err" />
          <ErrorMessage>{err}</ErrorMessage>
        </ErrorContainer>
      )}
    </WidgetContainer>
  )};

export default Widget