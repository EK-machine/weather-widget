import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled(Form)`
  width: 100%;
  position: relative;
  display: flex;
`;

export const InputStyled = styled(Field)`
  width: calc(100% - 35px);
  margin-bottom: 11px;
  background-color: #FFFFFF;
  height: calc(44px - 18px);
  border-radius: 4px;
  border: 1px solid rgba(150, 150, 150, 0.3);
  background: #FFFFFF;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  padding: 10px 15px 10px 20px;
`;

export const ClearButtonStyled = styled.button`
  position: absolute;
  top: 17px;
  right: 15px;
  outline: none;
  background-color: transparent;
  border: none;
  width: 13px;
  height: 13px;
  cursor: pointer;
`;

export const CrossOne = styled.div`
  position: absolute;
  right: -3px;
  border-bottom: 1px solid #000000;
  width: 18px;
  transform: rotate(-45deg);
`;

export const CrossTwo = styled.div`
  position: absolute;
  right: -3px;
  border-top: 1px solid #000000;
  width: 18px;
  transform: rotate(45deg);
`;
