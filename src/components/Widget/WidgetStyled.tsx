import styled from 'styled-components';

export const WidgetContainer = styled.div`
  max-height: 300px;
  height: 300px;
  background: #FFFFFF;
  border: 1px solid rgba(150, 150, 150, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;
`;

export const ErrorContainer = styled.div`
  display: flex;
  padding: 57px 0 0 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: #333333;
  margin: 0px;
`;

export const ErrorImg = styled.img`
  width: 150px;
`;